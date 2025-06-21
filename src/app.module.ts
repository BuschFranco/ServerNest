import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TasksModule } from './SimuMDG/simuMDG.module';
import { HeMdgModule } from './he-mdg/he-mdg.module';

@Module({
  imports: [TasksModule, HeMdgModule],
  controllers: [AppController],
})
export class AppModule {}
