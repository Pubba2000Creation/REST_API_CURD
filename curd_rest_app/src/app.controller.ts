import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    //for cerating use post method

      @Post()
      async createUser(@Body() userDto:User){
        return this.appService.createUser(userDto)
      }
      
    // read data from 
      @Get()
      readUser(){
        return this.appService.readUser()
      }






}
