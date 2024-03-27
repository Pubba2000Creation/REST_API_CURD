import { Injectable } from '@nestjs/common';
import { User,UserDocumnet } from './user.models';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { promises } from 'dns';
import { error } from 'console';

@Injectable()
export class AppService {
  
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocumnet>
  ){}

  // logic for create user
    async createUser(user: User): Promise<User> {
      const newUser = new this.userModel(user);
      return newUser.save();

    }


    //reading the data from database
    async readUser() {
      try {
        const users = await this.userModel.find().exec();
        return users;
      } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be handled by the caller
      }
    }
  

}
