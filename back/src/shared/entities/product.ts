import { Column  } from 'prisma'
import Base from './base';

export default class ProductEntities extends Base {
    @Column({ type: 'varchar'})
    public name?: string;

    @Column({ type: 'varchar'})
    public description?: string;
    
    @Column({ type: 'varchar'})
    public img?: string;

    @Column({ type: 'int4'})
    public value?: number;

    @Column({ type: 'int4'})
    public stock?: number;
}