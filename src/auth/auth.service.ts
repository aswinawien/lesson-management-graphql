import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpAuthCredentialDto } from './dto/sign-up-auth-credential.dto';
import { UserEntity } from './user.entity';
import { StudentService } from '../student/student.service';
import { RoleEnum } from './enum/role.enum';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
        private readonly studentService: StudentService
    ) {

    }

    async getUsers(): Promise<UserEntity[]> {
        return this.userRepository.find()
    }

    async signUp(signUpDto: SignUpAuthCredentialDto): Promise<UserEntity> {
        const { username, email, password, firstName, lastName, role } = signUpDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = this.userRepository.create({
            id: uuid(),
            username,
            email,
            firstName,
            lastName,
            salt,
            role,
            password: hashedPassword,
        })
        if (role === RoleEnum.STUDENT) {
            this.studentService.createStudent({ firstName, lastName, studies: ["6896e104-9554-4210-a250-5f85daf68d05"] })
        } else {
            console.log(`type teacher not ready!`)
        }
        return await this.userRepository.save(user)
    }
}
