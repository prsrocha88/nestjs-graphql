import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from './user.entity';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserDto): Promise<User> {
    return this.userService.createUser(data);
  }
}
