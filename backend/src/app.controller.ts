import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): { message: string } {
    return { message: 'Welcome to the API!' };
  }

  @Get('hello')
  getHello(): { message: string } {
    return { message: 'Hello from NestJS!' };
  }
}
