import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/product/repository/product.repository';
import { IProductRepository } from 'src/product/repository/interfaces/product.interface';
import { TYPES } from 'src/shared/types';
import { IUpdateProductUseCase } from './update-product.interface';
import { IPutProductDTO } from 'src/shared/dto/IPutProductDTO';

@Injectable()
export class UpdateProductUseCase implements IUpdateProductUseCase {
  constructor(
    @Inject(TYPES.ProductRepository)
    private readonly ProductRepository: IProductRepository,
  ) {}

  async execute(id: number, req: IPutProductDTO): Promise<void>{
    await this.ProductRepository.update( id, req);
    return;
  }
}
