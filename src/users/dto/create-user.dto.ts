import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";


export class createUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    //     @IsNumber()
    //     @Max(100)
    //     age: number;
}