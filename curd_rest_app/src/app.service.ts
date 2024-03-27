import { Injectable } from '@nestjs/common';
import { User,UserDocumnet } from './user.models';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocumnet>
  ){}

  // logic for create user
}
