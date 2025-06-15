import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks = [
       { id: 1,
        title: "Task 1",
        description: "Description for Task 1",
       }
    ]

    getTasks(){
        return this.tasks;
    }
}
