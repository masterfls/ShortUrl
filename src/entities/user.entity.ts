import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Url } from "./url.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 20, nullable: false })
    name: string;

    @Column({unique: true, length:50, nullable: false})
    email: string

    @Column({length: 128, nullable: true})
    password: string

    @Column({})
    createdAt: Date

    @ManyToMany(() => Url, (url) => url.users, {
        cascade: true
    })
    @JoinTable()
    urls: Url[]
}

