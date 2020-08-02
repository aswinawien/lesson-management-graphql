import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpAuthCredentialDto } from './dto/sign-up-auth-credential.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository
    ) {

    }

    async getUsers(): Promise<UserEntity[]> {
        return this.userRepository.find()
    }

    async signUp(signUpDto: SignUpAuthCredentialDto): Promise<UserEntity> {
        const { username, email, password, firstName, lastName } = signUpDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = this.userRepository.create({
            id: uuid(),
            username,
            email,
            firstName,
            lastName,
            salt,
            password: hashedPassword
        })
        return await this.userRepository.save(user)
    }
}
