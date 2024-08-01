import { IsBoolean, IsString, MinLength } from 'class-validator'

export class createTaskDto {

    @IsString()
    @MinLength(1)
    task: string;

    @IsBoolean()
    status: boolean;
}