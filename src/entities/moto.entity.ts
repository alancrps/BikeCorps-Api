import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Moto extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    brand: string;
    @Column()
    model: string;
    @Column()
    year: number;
    @Column()
    engine_cc: string;
    @Column()
    price: number;
    @Column()
    description: string;
    @Column()
    image_url: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}