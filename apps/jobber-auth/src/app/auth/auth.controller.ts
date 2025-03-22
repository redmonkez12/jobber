import { Controller, UseGuards } from '@nestjs/common';
import {
  AuthenticateRequest,
  AuthServiceController,
  AuthServiceControllerMethods,
} from 'types/proto/auth';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { TokenPayload } from './token-payload.interface';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  authenticate(request: AuthenticateRequest & { user: TokenPayload }) {
    return this.usersService.getUser({ id: request.user.userId });
  }
}
