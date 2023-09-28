import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pokemon' })
export class Pokemon {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @Column()
  hp: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column({ name: 'sp_attack' })
  spAttack: number;

  @Column({ name: 'sp_defense' })
  spDefense: number;

  @Column()
  speed: number;
}
