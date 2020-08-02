import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from "@nestjs/graphql";
import { LessonModule } from './lesson/lesson.module';
import { StudentModule } from './student/student.module';
import { typeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true // generate a schema based on ts type 
    }),
    LessonModule,
    StudentModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
