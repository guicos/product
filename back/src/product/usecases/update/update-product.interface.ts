import { IPutProductDTO } from "src/shared/dto/IPutProductDTO";

export interface IUpdateProductUseCase {
  execute(id: number, body: IPutProductDTO): Promise<void>
}
