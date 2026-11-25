import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { CreateUserDto } from "../user/dto/user.request.dto.js";
import { LoginDto } from "./dto/auth.request.dto.js";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    signup(@Body() user: CreateUserDto) {
        return this.authService.signup(user)
    }

    @Post('login')
    login(@Body() data: LoginDto) {
        return this.authService.login(data)
    }
}