import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { TasksModule } from './SimuMDG/simuMDG.module';
import { HeMdgModule } from './he-mdg/he-mdg.module';
import { Msisdn } from './SimuMDG/simuMDG.entity';

@Module({
  imports: [TasksModule, HeMdgModule, 
    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'YochicosDev30',
      database: 'servernest',
      entities: [Msisdn],
      synchronize: false
    }),*/
  ],
  controllers: [AppController],
})
export class AppModule {}
