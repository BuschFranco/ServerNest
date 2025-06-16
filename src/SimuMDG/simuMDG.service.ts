import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks = [
       {
         id: 1,
        title: "Task 1",
        description: "Description for Task 1",
       }
    ]

    getHello() {
        return 'Hello from Server';
    }

    getTasks(){
        return this.tasks;
    }

    createTask() {
        return "Creando Tarea";
    }
}
