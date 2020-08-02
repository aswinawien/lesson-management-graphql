import { Entity, BaseEntity, ObjectIdColumn, PrimaryColumn, Column } from "typeorm";
import { RoleEnum } from "./enum/role.enum";


@Entity()
export class UserEntity extends BaseEntity {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        enum: RoleEnum,
        default: RoleEnum.STUDENT,
        type: "enum"
    })
    role: RoleEnum;
}