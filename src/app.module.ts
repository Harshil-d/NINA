import { Module } from '@nestjs/common';
import { AppControllerasdfas } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
}) aas
export class AppModule {}
