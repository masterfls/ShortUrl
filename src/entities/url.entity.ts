import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Usuario } from "./usuario.entity";


@Entity()
export class Url {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'text', nullable: false})
    url_long: string

    @Column({type: 'text', nullable: false})
    url_short: string

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    expiresAt: Date

    @ManyToMany(() => User, (user) => user.urls)
    users: User[]

    @ManyToMany(() => Usuario, (usuario) => usuario.urls)
    usuarios: Usuario[]
}
