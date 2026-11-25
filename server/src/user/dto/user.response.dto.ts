import { Exclude, Expose } from "class-transformer";

export class UserResponseDto {
    @Expose()
    id: string;

    @Expose()
    first_name: string;

    @Expose()
    last_name: string;

    @Expose()
    email: string;

    @Exclude()
    mobile_number: string;

    @Exclude()
    password: string;

    @Expose()
    city: string;

    @Expose()
    country: string;

    @Expose()
    is_active: boolean;

    @Expose()
    access_token: string;

    constructor(partial: Partial<UserResponseDto>) {
        Object.assign(this, partial);
    }
}