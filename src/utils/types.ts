export type CreatePokemonParams = {
  id: number;
  name: string;
  type: string[];
  imageUrl: string;
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
};

export type UpdatePokemonParams = {
  name: string;
  type: string[];
  imageUrl: string;
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
};
