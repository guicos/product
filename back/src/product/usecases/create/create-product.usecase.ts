import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from 'src/product/repository/interfaces/product.interface';
import { IProductDTO } from 'src/shared/dto/IProductDTO';
import { TYPES } from 'src/shared/types';
import { ICreateProductUseCase } from './create-product.interface';

@Injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    @Inject(TYPES.ProductRepository)
    private readonly ProductRepository: IProductRepository,
  ) {}

  async execute(req: IProductDTO): Promise<void> {
    await this.ProductRepository.create(req);
    return;
  }
}
