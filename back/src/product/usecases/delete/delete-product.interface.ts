export interface IDeleteProductUseCase {
  execute(id: number): Promise<void>
}
