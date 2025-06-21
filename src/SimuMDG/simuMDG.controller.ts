import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TasksService } from './simuMDG.service';

@Controller("/simuMDG")
export class TasksController {
    constructor(private tasksService:TasksService){ }

    @Get("/")
    getHello() {
        return this.tasksService.getPositiveResponse();
    }

    @Post("/sendPin")
    postValidationForMsisdn(@Body("msisdn") msisdn: number) {
        return this.tasksService.postResponse(msisdn);
    }

    @Post("/validatePin")
    postValidationForPin(@Body("pin") pin: number){
        return this.tasksService.getPinResponse(pin);
    }

    @Get("/negative")
    createTask() {
        return this.tasksService.getNegativeResponse();
    }
}
