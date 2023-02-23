import { IProductDTO } from "src/shared/dto/IProductDTO"
import { IPutProductDTO } from "src/shared/dto/IPutProductDTO"
import ProductEntities from "src/shared/entities/product"

export interface IProductRepository {
    create(body: IProductDTO): Promise<ProductEntities>
    delete(id: number): Promise<void>
    update(id: number, body: IPutProductDTO): Promise<void>
    findById(id: number): Promise<ProductEntities | null>
    findAll(): Promise<ProductEntities[] | null>
}