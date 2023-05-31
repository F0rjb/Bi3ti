import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(name: string, price: number, description: string): Promise<import("./product.schema").ProductDocument>;
}
