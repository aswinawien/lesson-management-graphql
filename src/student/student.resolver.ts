import { Resolver, Mutation, Args, Query, ObjectType, Field, ResolveField, Parent } from "@nestjs/graphql";
import { StudentEntity } from "./student.entity";
import { StudentService } from "./student.service";
import { StudentType } from "./types/student.type";
import { CreateNewStundentDto } from "./dto/create-student.dto";
import { AssignStudentToLessonDTO } from "./dto/assign-student-to-lesson.dto";
import { StudentToLessonType } from "./types/student-to-lesson.type";
import { LessonService } from "../lesson/lesson.service";
import { LessonEntity } from "src/lesson/lesson.entity";



@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private studentService: StudentService,
        private lessonService: LessonService
    ) { }

    @Query(returns => [StudentType])
    async students(): Promise<StudentEntity[]> {
        return await this.studentService.getStudents();
    }

    @Query(returns => StudentType)
    async student(@Args("id") id: string): Promise<StudentEntity> {
        return await this.studentService.getStudent(id);
    }

    @Mutation(returns => StudentType)
    async createStudent(
        @Args('createNewStudentInput') createNewStudentInput: CreateNewStundentDto
    ): Promise<StudentEntity> {
        return await this.studentService.createStudent(createNewStudentInput)
    }

    @Mutation(returns => StudentToLessonType)
    async assignLesson(@Args("assignStudentToLessonInput") assignStudentToLessonInput: AssignStudentToLessonDTO): Promise<{
        studentName: string,
        lessonName: string
    }> {
        const { studentId, lessonId } = assignStudentToLessonInput
        return this.studentService.assignStudentToTheLesson(studentId, lessonId)
    }

    @ResolveField()
    async studies(@Parent() student: StudentEntity): Promise<LessonEntity[]> {
        return await this.lessonService.getManyLessons(student.studies.map(({ id }) => (id)))
    }
}