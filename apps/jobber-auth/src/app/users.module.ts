import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersResolver } from './users/users.resolver';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {
}
