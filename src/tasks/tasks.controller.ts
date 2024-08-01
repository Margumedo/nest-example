import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { createTaskDto } from "./dto/create-task.dto";
import { ApiTags } from "@nestjs/swagger";


@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {

    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }



    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks();
    }
    @Get('/:id')
    getTask(@Param('id') id: string) {
        console.log(id)
        const taskFound = this.tasksService.getTask(parseInt(id));

        if (!taskFound) return new NotFoundException(`Taks with id ${id} not found!`)

        return taskFound
    }

    @Post()
    createTask(@Body() task: createTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Patch()
    updateTask() {
        // const result = this.tasksService.updateTaskStatus();

        // if (!result) return new NotFoundException(`Taks with id ${id} not found!`)

        // return!result
    }


    @Put('/:id')
    updateTaskStatus(@Param('id') id: string, @Body() task: updateTaskDto) {

        const result = this.tasksService.updateTask(parseInt(id), task);

        if (!result) return new NotFoundException(`Taks with id ${id} not found!`)

        return result
    }


    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }




}