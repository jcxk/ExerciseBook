import { Injectable } from '@nestjs/common';
import {  uptime } from 'node:process';

@Injectable()
export class AppService {
  healthcheck(): any {
    return {
      uptime: uptime().toString(),
    };
  }
}
