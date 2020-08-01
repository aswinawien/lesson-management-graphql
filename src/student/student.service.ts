import { Injectable } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import { StudentRepository } from './student.repository';
import { StudentEntity } from './student.entity';
import { CreateNewStundentDto } from './dto/create-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonRepository } from 'src/lesson/lesson.repository';
import { StudentType } from './student.type';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(StudentRepository)
        private studentRepository: StudentRepository,
        @InjectRepository(LessonRepository)
        private lessonRepository: LessonRepository,
    ) {

    }

    async getStudents(): Promise<StudentEntity[]> {
        return this.studentRepository.find()
    }

    async createStudent(createNewStudent: CreateNewStundentDto): Promise<StudentEntity> {
        const { firstName, lastName, studies } = createNewStudent;
        const lessons = await this.lessonRepository.find({ where: { id: { $in: studies } } }) // mongodb specific syntax
        const newStudent = this.studentRepository.create({
            id: uuid(),
            firstName,
            lastName,
            studies: [...lessons]
        })
        return await this.studentRepository.save(newStudent)
    }


    async getStudent(
        id: string
    ): Promise<StudentEntity> {
        return this.studentRepository.findOne({ where: { id } })
    }

    async assignStudentToTheLesson(id: string, lessonId: string): Promise<{
        studentName: string,
        lessonName: string
    }> {
        const student = await this.getStudent(id);
        const lesson = await (await this.lessonRepository.findOne({ where: { id: lessonId } }))
        student.studies = [...student.studies, lesson]
        await this.studentRepository.save(student);
        return {
            studentName: `${student.firstName} ${student.lastName}`,
            lessonName: lesson.name
        }
    }
}
