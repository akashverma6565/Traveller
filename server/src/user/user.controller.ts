import { Body, Controller, Post, Request } from "@nestjs/common";
import { UserService } from "./user.service.js";
import { CreateUserDto } from "./dto/user.request.dto.js";


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() data:CreateUserDto) {
        console.log('controller', data);
        return this.userService.create(data);
    }
}