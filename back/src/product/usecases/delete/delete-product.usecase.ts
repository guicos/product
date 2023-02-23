import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/product/repository/product.repository';
import { IProductRepository } from 'src/product/repository/interfaces/product.interface';
import { TYPES } from 'src/shared/types';
import { IDeleteProductUseCase } from './delete-product.interface';

@Injectable()
export class DeleteProductUseCase implements IDeleteProductUseCase {
  constructor(
    @Inject(TYPES.ProductRepository)
    private readonly ProductRepository: IProductRepository,
  ) {}

  async execute(id: number): Promise<void>{
    return await this.ProductRepository.delete(id);
  }
}
