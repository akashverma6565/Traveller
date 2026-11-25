import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service.js";
import { CreateUserDto } from "../user/dto/user.request.dto.js";
import * as bcrypt from "bcrypt";
import { LoginDto } from "./dto/auth.request.dto.js";
import { UserResponseDto } from "../user/dto/user.response.dto.js";
import { plainToInstance } from "class-transformer";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService:JwtService) {}
    

    async signup(data: CreateUserDto) {
        console.log('signup', data);
        let salt = await bcrypt.genSalt();
        console.log('salt', salt);
        let hassPassword = await bcrypt.hash(data.password, salt);
        console.log('hassed password', hassPassword);
        return this.userService.create({...data, password: hassPassword});
    }

    async login(data: LoginDto):Promise<UserResponseDto[] | string> {
        let user = await this.userService.fetchByEmail(data.email);
        if(!user) return "Invalid email or password";
        let isMatched = await bcrypt.compare(data.password, user.password);
        if(!isMatched) return "Invalid email or password";
        let access_token = await this.jwtService.signAsync({name: user.first_name, id: user.id, email: user.email });
        return plainToInstance(UserResponseDto, {...user, access_token}, {
          excludeExtraneousValues: true,
        });
    }
}