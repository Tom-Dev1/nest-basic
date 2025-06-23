import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://truongthanhh88:ru9RacQX7eV2rCwn@cluster0.ldolsax.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
