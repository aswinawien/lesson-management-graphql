import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateNewTaskDto } from "./dto/create-new-task.dto";
import { LessonEntity } from "./lesson.entity";


@Resolver(of => LessonType)
export class LessonResolver {

    constructor(
        private lessonService: LessonService
    ) { }
    // Query : to retreieve data, Mutation : to create, modify data

    @Query(returns => LessonType)
    async lesson(@Args('id') id?: string): Promise<LessonEntity> {
        return await this.lessonService.getLesson(id)
    }


    @Query(returns => [LessonType])
    async lessons(): Promise<LessonEntity[]> {
        return await this.lessonService.getLessons()
    }



    @Mutation(returns => LessonType)
    async createLesson(
        @Args('createNewTaskInput') createNewTaskInput: CreateNewTaskDto
    ): Promise<LessonEntity> {
        return await this.lessonService.createLesson(createNewTaskInput)
    }

}