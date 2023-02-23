import { UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn  } from 'prisma'

export default class Base {
    @PrimaryGeneratedColumn('id')
    public id?: number;

    @CreateDateColumn({ type: 'timestamptz' })
    public createdAt?: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    public updatedAt?: Date;
}