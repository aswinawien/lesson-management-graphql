import { Entity, PrimaryColumn, Column, ObjectIdColumn, BaseEntity } from "typeorm";

@Entity()
export class LessonEntity extends BaseEntity {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string;
}