import {
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import ProductEntities from 'src/shared/entities/product';
import { TYPES } from 'src/shared/types';
import {
  ICreateProductUseCase,
  IUpdateProductUseCase,
  IGetProductUseCase,
  IGetIdProductUseCase,
  IDeleteProductUseCase,
} from '../usecases';

@Controller('/product')
export class ProductController {
  private createProductUseCase: ICreateProductUseCase;
  private updateProductUseCase: IUpdateProductUseCase;
  private getProductUseCase: IGetProductUseCase;
  private getIdProductUseCase: IGetIdProductUseCase;
  private deleteProductUseCase: IDeleteProductUseCase;

  constructor(
    @Inject(TYPES.CreateProductUseCase)
    createProductUseCase: ICreateProductUseCase,
    @Inject(TYPES.UpdateProductUseCase)
    updateProductUseCase: IUpdateProductUseCase,
    @Inject(TYPES.GetProductUseCase) getProductUseCase: IGetProductUseCase,
    @Inject(TYPES.GetIdProductUseCase)
    getIdProductUseCase: IGetIdProductUseCase,
    @Inject(TYPES.DeleteProductUseCase)
    deleteProductUseCase: IDeleteProductUseCase,
  ) {
    this.createProductUseCase = createProductUseCase;
    this.updateProductUseCase = updateProductUseCase;
    this.getProductUseCase = getProductUseCase;
    this.getIdProductUseCase = getIdProductUseCase;
    this.deleteProductUseCase = deleteProductUseCase;
  }

  @Get()
  list(): Promise<ProductEntities[]> {
    return this.getProductUseCase.execute();
  }

  @Get('/:id')
  getId(@Req() req: Request): Promise<ProductEntities | null> {
    const id: number = parseInt(req.params.id)
    return this.getIdProductUseCase.execute(id);
  }

  @Post()
  async create(@Req() req: Request): Promise<void> {
    return await this.createProductUseCase.execute(req.body);
  }

  @Put('/:id')
  async update(@Req() req: Request): Promise<void> {
    const id: number = parseInt(req.params.id)
    return await this.updateProductUseCase.execute(id, req.body);
  }

  @Delete('/:id')
  async delete(@Req() req: Request): Promise<void> {
    const id: number = parseInt(req.params.id)
    
    return await this.deleteProductUseCase.execute(id);
  }
}
