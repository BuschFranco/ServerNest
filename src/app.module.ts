import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TasksModule } from './SimuMDG/simuMDG.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [TasksModule, ProjectsModule],
  controllers: [AppController],
})
export class AppModule {}
