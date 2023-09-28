import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from 'src/typeorm/entities/Pokemon';
import { CreatePokemonParams, UpdatePokemonParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {

  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>,
  ) { }

  async getPokemon() {
    const pokemons = await this.pokemonRepository.find();
    return pokemons.map((pokemon) => ({
      ...pokemon,
      type: pokemon.type.split(', '),
    }));
  }

  createPokemon(pokemon: CreatePokemonParams) {
    const newPokemon = this.pokemonRepository.create({
      ...pokemon,
      type: pokemon.type.join(', '),
    });
    return this.pokemonRepository.save(newPokemon);
  }

  updatePokemon(id: number, pokemon: UpdatePokemonParams) {
    return this.pokemonRepository.update({ id }, {
      ...pokemon,
      type: pokemon.type.join(', '),
    });
  }

  deletePokemon(id: number) {
    return this.pokemonRepository.delete({ id });
  }
}
