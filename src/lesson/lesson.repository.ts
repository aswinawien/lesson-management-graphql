import { EntityRepository, Repository } from "typeorm";
import { LessonEntity } from "./lesson.entity";

@EntityRepository(LessonEntity)
export class LessonRepository extends Repository<LessonEntity>{

}