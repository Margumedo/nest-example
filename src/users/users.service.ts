import { Injectable } from '@nestjs/common';
import { createTaskDto } from 'src/tasks/dto/create-task.dto';
import { createUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';



@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {

    }

    getUsers() {
        return this.prisma.user.findMany();
    }

    createUser(user: createUserDto) {

        return this.prisma.user.create({ data: user })

        return user
    }
}
