import { Module } from '@nestjs/common';
import { TYPES } from 'src/shared/types';
import { ProductController } from './controllers/product.controller';
import { ProductRepository } from './repository/product.repository';
import {
  CreateProductUseCase,
  UpdateProductUseCase,
  GetProductUseCase,
  GetIdProductUseCase,
  DeleteProductUseCase,
} from './usecases';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    {
      provide: TYPES.GetProductUseCase,
      useClass: GetProductUseCase,
    },
    {
      provide: TYPES.CreateProductUseCase,
      useClass: CreateProductUseCase,
    },
    {
      provide: TYPES.UpdateProductUseCase,
      useClass: UpdateProductUseCase,
    },
    {
      provide: TYPES.GetIdProductUseCase,
      useClass: GetIdProductUseCase,
    },
    {
      provide: TYPES.DeleteProductUseCase,
      useClass: DeleteProductUseCase,
    },
    {
      provide: TYPES.GetProductUseCase,
      useClass: GetProductUseCase,
    },
    {
      provide: TYPES.ProductRepository,
      useClass: ProductRepository,
    },
  ],
})
export class ProductModule {}
