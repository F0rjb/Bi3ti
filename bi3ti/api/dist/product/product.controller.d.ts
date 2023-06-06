import { ProductService } from './product.service';
import { ProductDocument } from './product.schema';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(name: string, price: number, description?: string): Promise<ProductDocument>;
    getProducts(): Promise<ProductDocument[]>;
    getOneProduct(id: string): Promise<ProductDocument>;
    updateProduct(id: string, name: string, price: number, description?: string): Promise<ProductDocument>;
    deleteProduct(id: string): Promise<any>;
}
