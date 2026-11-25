import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({})
export class UserEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "varchar", nullable: false})
    first_name: string;

    @Column({type: 'varchar'})
    last_name: string;

    @Column({type: "varchar", nullable: false, unique: true})
    email: string;

    @Column()
    mobile_number: string;

    @Column({type: "varchar"})
    password: string;

    @Column({type: "varchar", nullable: false, default: "customer"})
    role: string;

    @Column()
    city: string;
    
    @Column()
    country: string;

    @Column({type: "boolean", default: true})
    is_active: boolean;
}