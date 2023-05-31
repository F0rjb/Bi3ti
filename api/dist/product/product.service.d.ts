import { ProductDocument } from './product.schema';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    create(name: string, price: number, description: string): Promise<ProductDocument>;
    findAll(): Promise<ProductDocument[]>;
    findOne(id: string): Promise<ProductDocument>;
    update(id: string, newPrice: number, newName: string, newDescription: string): Promise<ProductDocument>;
}
