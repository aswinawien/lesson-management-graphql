import { ObjectType, Field, ID } from "@nestjs/graphql";
import { RoleEnum } from "../enum/role.enum";

@ObjectType('User')
export class UserType {

    @Field(type => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(type => RoleEnum)
    role: RoleEnum;
}