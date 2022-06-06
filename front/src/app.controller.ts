import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('utils')
@Controller('utils')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('healthcheck')
  healthcheck(): string {
    return this.appService.healthcheck();
  }
}
