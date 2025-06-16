import {Module} from '@nestjs/common';
import { TasksController } from './simuMDG.controller';
import { TasksService } from './simuMDG.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {
  
}