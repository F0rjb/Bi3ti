import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDocument } from './product.schema';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ): Promise<ProductDocument> {
    return this.productService.create(name, price, description);
  }
  @Get()
  getProducts(): Promise<ProductDocument[]> {
    return this.productService.findAll();
  }
  @UseGuards(JwtGuard)
  @Get(':id')
  getOneProduct(@Param('id') id: string): Promise<ProductDocument> {
    return this.productService.findOne(id);
  }
  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ): Promise<ProductDocument> {
    return this.productService.update(
      id,
      price,
      name,

      description,
    );
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
