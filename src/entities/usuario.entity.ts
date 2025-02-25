import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Url } from "./url.entity";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true, length: 50, nullable: false})
    email: string

    @ManyToMany(() => Url, (url) => url.usuarios, {
        cascade: true
    })
    @JoinTable()
    urls: Url[]
}