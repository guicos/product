import { IProductDTO } from "src/shared/dto/IProductDTO";

export interface ICreateProductUseCase {
  execute(body: IProductDTO): Promise<void>
}
