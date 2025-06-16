import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './simuMDG.service';

@Controller("/simuMDG")
export class TasksController {
    constructor(private tasksService:TasksService){ }

    @Get("/")
    getHello() {
        return this.tasksService.getHello();
    }

    @Get("/get")
    getAllTasks(){
        return this.tasksService.getTasks();
    }

    @Post("/create")
    createTask() {
        return this.tasksService.createTask();
    }
}
