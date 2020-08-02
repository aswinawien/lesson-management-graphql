import { InputType, registerEnumType } from "@nestjs/graphql";



export enum RoleEnum {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER"
}

registerEnumType(RoleEnum,
    {
        name: "Role"
    }
)