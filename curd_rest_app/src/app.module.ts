import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { Userschema } from './user.models';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://user1:QDGx9bBXNyxhleWd@cluster0.y3nn9lx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
     // Configure MongooseModule with MongoDB connection URI
    MongooseModule.forFeature([{name:'user',schema:Userschema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}