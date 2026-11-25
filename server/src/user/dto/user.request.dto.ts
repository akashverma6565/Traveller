import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Min, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString({message: 'Please enter valid first name'})
  @IsNotEmpty({message: 'Please enter first name'})
  @MinLength(3, {message: 'Please enter valid name'})
  first_name: string; 
  
  @IsString({message: 'Please enter valid first name'})
  @IsOptional()
  last_name?: string; 

  @IsEmail({}, {message: 'Please enter valid email'})
  @IsNotEmpty({message: 'Please enter email'})
  email: string;

  @IsString()
  @IsOptional()
  @Length(10)
  mobile_number: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsString()
  city: string;

  @IsString()
  country: string;
}