import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class USERS{

    @PrimaryGeneratedColumn()
    userId:number

    @Column({type: 'varchar' , length:225 })
    name: string

    @Column({type: 'varchar', unique:true})
    email: string
    
    @Index() 
    @Column({type: 'int' })
    age:number

}