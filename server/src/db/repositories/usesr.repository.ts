import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { CreateUserDto } from "../../user/dto/user.request.dto.js";

@Injectable()
export class UserRepository {
    constructor(private readonly datasource: DataSource) {}

    async create(data:CreateUserDto) {
        console.log('repository', data)
        let query = `INSERT into user_entity (first_name, last_name, email, mobile_number, password, city, country) values($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

        return await this.datasource.query(query, [data.first_name, data.last_name, data.email, data.mobile_number, data.password, data.city, data.country])
    }

    async fetchByEmail(email: string) {
        const query = `SELECT * FROM user_entity WHERE email = $1 LIMIT 1`;
        const result = await this.datasource.query(query, [email]);
        return result[0] || null;
    }
}