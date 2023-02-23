import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from 'src/product/repository/interfaces/product.interface';
import { TYPES } from 'src/shared/types';
import { IGetProductUseCase } from './get-product.interface';
import ProductEntities from 'src/shared/entities/product';

@Injectable()
export class GetProductUseCase implements IGetProductUseCase {
  constructor(
    @Inject(TYPES.ProductRepository)
    private readonly ProductRepository: IProductRepository,
  ) {}

  execute(): Promise<ProductEntities[]>{
    return this.ProductRepository.findAll();
  }
}
