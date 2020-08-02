import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from "config";
import { StudentEntity } from "src/student/student.entity";
import { LessonEntity } from "src/lesson/lesson.entity";
import { UserEntity } from "src/auth/user.entity";

const dbConfig = config.get("db")

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    url: dbConfig.url,
    synchronize: dbConfig.synchronize,
    useUnifiedTopology: dbConfig.useUnifiedTopology,
    entities: [
        StudentEntity,
        LessonEntity,
        UserEntity
    ]
}