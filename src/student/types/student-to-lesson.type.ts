import { ObjectType, Field } from "@nestjs/graphql";


@ObjectType("StudentToLessonType")
export class StudentToLessonType {
    @Field()
    studentName: string;
    @Field()
    lessonName: string
}