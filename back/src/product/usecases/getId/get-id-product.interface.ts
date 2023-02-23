import ProductEntities from "src/shared/entities/product";

export interface IGetIdProductUseCase {
  execute(id: number): Promise<ProductEntities | null>
}
