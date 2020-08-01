import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { LessonRepository } from './lesson.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNewTaskDto } from './dto/create-new-task.dto';
import { LessonEntity } from './lesson.entity';
import { ResolveField, Parent } from '@nestjs/graphql';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(LessonRepository)
        private lessonRepository: LessonRepository
    ) {
    }

    async getLesson(id: string): Promise<LessonEntity> {
        if (id) return await this.lessonRepository.findOne({ where: { id } });
    }

    async getLessons(): Promise<LessonEntity[]> {
        return await this.lessonRepository.find()
    }

    async createLesson(createNewTaskDto: CreateNewTaskDto): Promise<LessonEntity> {
        const { name, startDate, endDate } = createNewTaskDto;
        const lesson = await this.lessonRepository.create({
            name,
            startDate,
            endDate,
            id: uuid()
        });
        return await this.lessonRepository.save(lesson)
    }

    async getManyLessons(lessonIds: string[]): Promise<LessonEntity[]> {
        return await this.lessonRepository.find({ where: { id: { $in: lessonIds } } })
    }
}
