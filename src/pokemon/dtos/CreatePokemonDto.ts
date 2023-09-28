import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePokemonDto {

  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  type: string[];

  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsInt()
  @IsNotEmpty()
  hp: number;

  @IsInt()
  @IsNotEmpty()
  attack: number;

  @IsInt()
  @IsNotEmpty()
  defense: number;

  @IsInt()
  @IsNotEmpty()
  spAttack: number;

  @IsInt()
  @IsNotEmpty()
  spDefense: number;

  @IsInt()
  @IsNotEmpty()
  speed: number;
}
