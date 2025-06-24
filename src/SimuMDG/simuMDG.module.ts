import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Msisdn } from './simuMDG.entity';
import { TasksController } from './simuMDG.controller';
import { TasksService } from './simuMDG.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  //imports: [ TypeOrmModule.forFeature([Msisdn]),],
})
export class TasksModule {
  
}