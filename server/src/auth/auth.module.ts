import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { UserModule } from "../user/user.module.js";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy.js";


@Module({
    imports: [UserModule, PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'super-secret-key', // Use ConfigService in production
      signOptions: { expiresIn: '1h' },
    }),],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: []
})

export class AuthModule{};