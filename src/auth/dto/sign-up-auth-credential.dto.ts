import { InputType, Field } from "@nestjs/graphql";
import { RoleEnum } from "../enum/role.enum";
import { IsIn } from "class-validator";

@InputType()
export class SignUpAuthCredentialDto {

    @Field()
    email: string;

    @Field()
    username: string;

    @Field()
    password: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    // @Field()
    // @IsIn([RoleEnum.STUDENT, RoleEnum.TEACHER])
    // role: RoleEnum[];
}