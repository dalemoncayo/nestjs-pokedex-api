import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './typeorm/entities/Pokemon';
import { DATABASE, HOST, PASSWORD, PORT, USERNAME } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: HOST,
      port: PORT,
      username: USERNAME,
      password: PASSWORD,
      database: DATABASE,
      entities: [Pokemon],
      synchronize: true,
    }),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
