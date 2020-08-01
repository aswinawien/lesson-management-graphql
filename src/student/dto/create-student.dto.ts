import { InputType, Field, ID } from "@nestjs/graphql";
import { MinLength, IsUUID } from "class-validator";
import { LessonType } from "src/lesson/lesson.type";


@InputType()


export class CreateNewStundentDto {
    @MinLength(1)
    @Field()
    firstName: string;

    @MinLength(1)
    @Field()
    lastName: string;

    @IsUUID("4", { each: true })
    @Field(type => [ID], {
        defaultValue: [
            "6896e104-9554-4210-a250-5f85daf68d05"
        ]
    })
    studies: [string];
}