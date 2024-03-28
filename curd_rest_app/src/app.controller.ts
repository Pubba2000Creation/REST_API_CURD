import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { get } from 'http';
import { UserUpdateDto } from './userUpdate.dto';

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


    // update data from database

    @Put(":id")
    async updateUser(@Param('id') id:string, @Body() updatedata: UserUpdateDto) :Promise<User>{

      return this.appService.updateUser(id,updatedata)


    }

    

    //delete user 
    @Delete(':id')
    async DeleteUser(@Param('id') id:string){
      return this.appService.DeleteUser(id)
    }





}
