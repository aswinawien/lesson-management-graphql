import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentResolver } from './student.resolver';
import { StudentRepository } from './student.repository';
import { LessonRepository } from 'src/lesson/lesson.repository';
import { LessonModule } from 'src/lesson/lesson.module';

@Module({
  imports: [
    LessonModule,
    TypeOrmModule.forFeature(
      [
        StudentRepository,
        LessonRepository,
      ],
    )
  ],
  providers: [StudentResolver, StudentService]
})
export class StudentModule { }
