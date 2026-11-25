import { Injectable } from "@nestjs/common";
import { UserRepository } from "../db/repositories/usesr.repository.js";
import { CreateUserDto } from "./dto/user.request.dto.js";


@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    create(data: CreateUserDto) {
        console.log('payload with hassed password', data)
        return this.userRepository.create(data);
    }

    fetchByEmail(email: string) {
        return this.userRepository.fetchByEmail(email);
    }
}