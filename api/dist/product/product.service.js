"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(name, price, description) {
        const newProduct = new this.productModel({
            name,
            price,
            description,
        });
        return newProduct.save();
    }
    async findAll() {
        return this.productModel.find().exec();
    }
    async findOne(id) {
        return this.productModel.findById(id).exec();
    }
    async update(id, newPrice, newName, newDescription) {
        const existingProduct = await this.productModel.findById(id);
        existingProduct.name = newName !== null && newName !== void 0 ? newName : existingProduct.name;
        existingProduct.description = newDescription !== null && newDescription !== void 0 ? newDescription : existingProduct.description;
        existingProduct.price = newPrice !== null && newPrice !== void 0 ? newPrice : existingProduct.price;
        return existingProduct.save();
    }
    async delete(id) {
        const deleted = await this.productModel.findById(id);
        await this.productModel.deleteOne({ _id: id }).exec();
        return { deleted: deleted };
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map