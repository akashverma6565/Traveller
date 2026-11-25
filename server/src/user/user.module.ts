import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../db/entities/user.entity.js";
import { UserController } from "./user.controller.js";
import { UserService } from "./user.service.js";
import { UserRepository } from "../db/repositories/usesr.repository.js";

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity])],
    controllers:[UserController],
    providers:[UserService, UserRepository],
    exports:[UserService]
})
export class UserModule{};