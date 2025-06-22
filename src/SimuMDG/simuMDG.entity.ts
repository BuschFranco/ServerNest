import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("msisdn") //Nombre exacto de la tabla en la base de datos
    export class Msisdn {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    msisdn: number;

    }
