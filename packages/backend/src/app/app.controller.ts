import { Body, Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getData(@Body() body: any) {
    console.log(body);
    return this.appService.getData();
  }
}
