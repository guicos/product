import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from 'src/product/repository/interfaces/product.interface';
import { TYPES } from 'src/shared/types';
import { IGetIdProductUseCase } from './get-id-product.interface';
import ProductEntities from 'src/shared/entities/product';

@Injectable()
export class GetIdProductUseCase implements IGetIdProductUseCase {
  constructor(
    @Inject(TYPES.ProductRepository)
    private readonly ProductRepository: IProductRepository,
  ) {}

  execute(id: number): Promise<ProductEntities | null>{
    return this.ProductRepository.findById(id);
  }
}
