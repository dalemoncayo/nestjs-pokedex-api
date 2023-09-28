import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePokemonDto } from 'src/pokemon/dtos/CreatePokemonDto';
import { UpdatePokemonDto } from 'src/pokemon/dtos/UpdatePokemonDto';
import { PokemonService } from 'src/pokemon/services/pokemon/pokemon.service';

@Controller('pokemon')
export class PokemonController {

  constructor(private pokemonService: PokemonService) { }

  @Get()
  getPokemon() {
    return this.pokemonService.getPokemon();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createPokemon(@Body() pokemon: CreatePokemonDto) {
    return this.pokemonService.createPokemon(pokemon);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async updatePokemon(
    @Param('id', ParseIntPipe) id: number,
    @Body() pokemon: UpdatePokemonDto,
  ) {
    await this.pokemonService.updatePokemon(id, pokemon);
  }

  @Delete(':id')
  async deletePokemon(@Param('id', ParseIntPipe) id: number) {
    await this.pokemonService.deletePokemon(id);
  }
}
