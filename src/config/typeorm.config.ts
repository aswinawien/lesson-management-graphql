import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from "config";

const dbConfig = config.get("db")

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    url: dbConfig.url,
    synchronize: dbConfig.synchronize,
    useUnifiedTopology: dbConfig.useUnifiedTopology
}