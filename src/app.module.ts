import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from "@nestjs/graphql";
import { LessonModule } from './lesson/lesson.module';
import { LessonEntity } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { StudentEntity } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        LessonEntity,
        StudentEntity
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true // generate a schema based on ts type 
    }),
    LessonModule,
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
