import { Controller, Get, Req, Res, HttpCode, Param, ParseIntPipe, Query } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';


@Controller()
export class HelloController {



    @Get('/hello')
    hello(@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
        response.status(200).json({
            message: 'Hello World'
        })
    }

    @Get('/ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 15;
    }

    @Get('/greet')
    getGreet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        return `Hello ${query.name}, you are ${query.age} years old`;
    }
}
