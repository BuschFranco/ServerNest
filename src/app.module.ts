import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TasksModule } from './SimuMDG/simuMDG.module';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
})
export class AppModule {}
