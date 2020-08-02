import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthResolver } from './auth.resolver';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forFeature([
      UserRepository
    ])
  ],
  providers: [AuthService, AuthResolver]
})
export class AuthModule { }
