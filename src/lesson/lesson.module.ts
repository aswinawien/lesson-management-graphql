import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonRepository } from './lesson.repository';

@Module({
    imports: [TypeOrmModule.forFeature(
        [LessonRepository]
    )],
    providers: [LessonResolver, LessonService],
    exports: [LessonService]
})
export class LessonModule { }
