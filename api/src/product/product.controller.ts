import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('price') price: string,
    @Body('description') description: string,
  ) {
    // return this.ProductService;
  }
}
