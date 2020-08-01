import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentToLessonDTO {
    @IsUUID("4")
    @Field(type => ID)
    studentId: string;
    @IsUUID("4")
    @Field(type => ID)
    lessonId: string;
}