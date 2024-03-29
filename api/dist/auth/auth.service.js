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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const dist_1 = require("@nestjs/jwt/dist");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async hashPassword(password) {
        return bcrypt.hash(password, 12);
    }
    async register(user) {
        const { name, email, password } = user;
        const existingUser = await this.userService.findByEmail(email);
        if (existingUser)
            throw new common_1.HttpException('Credentials already in use', common_1.HttpStatus.NOT_FOUND);
        const hashedPassword = await this.hashPassword(password);
        const newUser = await this.userService.create(name, email, hashedPassword);
        const jwt = await this.jwtService.signAsync({ user });
        return {
            user: this.userService._getUserDetails(newUser),
            jwt,
        };
    }
    async doesPasswordMatch(passwrod, hashedPassword) {
        return bcrypt.compare(passwrod, hashedPassword);
    }
    async validateUser(email, password) {
        const user = await this.userService.findByEmail(email);
        const doesUserExist = !!user;
        if (!doesUserExist)
            return null;
        const doesPasswordMatch = await this.doesPasswordMatch(password, user.password);
        if (!doesPasswordMatch)
            throw new common_1.HttpException('Bad Credentials', common_1.HttpStatus.NOT_FOUND);
        return this.userService._getUserDetails(user);
    }
    async login(existingUser) {
        const { email, password } = existingUser;
        const user = await this.validateUser(email, password);
        if (!user)
            throw new common_1.HttpException('invalid Credentials', common_1.HttpStatus.NOT_FOUND);
        const jwt = await this.jwtService.signAsync({ user });
        return { token: jwt, user: user };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        dist_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map