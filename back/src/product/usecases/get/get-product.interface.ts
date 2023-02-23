import ProductEntities from "src/shared/entities/product";

export interface IGetProductUseCase {
  execute(): Promise<ProductEntities[]>
}
