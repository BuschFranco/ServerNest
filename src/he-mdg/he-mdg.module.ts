import { Module } from '@nestjs/common';
import { HeMdgController } from './he-mdg.controller';
import { HeMdgService } from './he-mdg.service';

@Module({
  controllers: [HeMdgController],
  providers: [HeMdgService]
})
export class HeMdgModule {}
