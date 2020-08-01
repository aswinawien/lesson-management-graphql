import { BaseEntity, Entity, ObjectIdColumn, PrimaryColumn, Column } from "typeorm";
import { LessonEntity } from "src/lesson/lesson.entity";


@Entity()
export class StudentEntity extends BaseEntity {

    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    studies: LessonEntity[];
}