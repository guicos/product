import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { IProductDTO } from 'src/shared/dto/IProductDTO';
import { IPutProductDTO } from 'src/shared/dto/IPutProductDTO';
import ProductEntities from 'src/shared/entities/product';
import { IProductRepository } from './interfaces/product.interface';

@Injectable()
export class ProductRepository implements IProductRepository{
  private prisma = new PrismaClient()

  create(body: IProductDTO): Promise<ProductEntities>{
    return this.prisma.product.create({ data: body});
  }

  async delete(id: number): Promise<void>{
    await this.prisma.product.delete({ where: { id }});
    return;
  }

  async update(id: number, body: IPutProductDTO): Promise<void>{
    await this.prisma.product.update({ where: {id}, data: body});
    return;
    
  }

  findById(id: number): Promise<ProductEntities | null>{
    return this.prisma.product.findFirst({ where: { id }});
  }

  findAll(): Promise<ProductEntities[]>{
    return this.prisma.product.findMany();
  }
}
