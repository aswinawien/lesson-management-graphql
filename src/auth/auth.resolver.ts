import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { UserType } from "./types/user.type";
import { UserEntity } from "./user.entity";
import { SignUpAuthCredentialDto } from "./dto/sign-up-auth-credential.dto";
import { AuthService } from "./auth.service";


@Resolver(of => UserType)
export class AuthResolver {
    constructor(
        private authService: AuthService
    ) { }

    @Query(returns => [UserType])
    async users(): Promise<UserEntity[]> {
        return this.authService.getUsers()
    }
    @Mutation(returns => UserType)
    async signUp(@Args('signUpNewUserInput') signUpAuthCredentialInput: SignUpAuthCredentialDto): Promise<UserEntity> {
        return await this.authService.signUp(signUpAuthCredentialInput)
    }
}