import { Module } from '@nestjs/common';
import { PokemonController } from './controllers/pokemon/pokemon.controller';
import { PokemonService } from './services/pokemon/pokemon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from 'src/typeorm/entities/Pokemon';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [PokemonService]
})
export class PokemonModule { }
