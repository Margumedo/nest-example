import { Injectable } from "@nestjs/common";
import { createTaskDto } from "./dto/create-task.dto";


@Injectable({})
export class TasksService {

    private tasks = [];

    getTasks() {
        return this.tasks
    }

    getTask(id: number) {
        console.log(id)
        return this.tasks.find(task => task.id === id);
    }

    createTask(task: createTaskDto) {

        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task
    }

    updateTask(id: number, task: updateTaskDto) {
        let taskFound = this.tasks.find(task => task.id === id)

        taskFound.status = task.status
        taskFound.tittle = task.tittle

        return taskFound
    }


    updateTaskStatus() {
        return 'Actualizando el estado de uan tarea'
    }


    deleteTask() {
        return 'Borrando tarea'
    }


}