import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { createTaskDto } from 'src/tasks/dto/create-task.dto';
import { createUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
@ApiTags('users')
export class UsersController {


    constructor(private usersService: UsersService) { }


    @Get()
    getAllUsers() {
        return this.usersService.getUsers();
    }

    @Post()
    createUser(@Body() user: createUserDto) {

        return this.usersService.createUser(user)
    }
}
