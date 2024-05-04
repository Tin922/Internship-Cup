import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserAuthGuard } from './user-auth.guard';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(
    @Body()
    {
      firstName,
      lastName,
      dateOfBirth,
      preferredCity,
      preferredCounty,
      receiveNotifications,
      profilePhoto,
      email,
      password,
    }: RegisterDto,
  ) {
    return this.usersService.register(
      firstName,
      lastName,
      dateOfBirth,
      preferredCity,
      preferredCounty,
      receiveNotifications,
      profilePhoto,
      email,
      password,
    );
  }

  @Post('login')
  login(@Body() { email, password }: LoginDto) {
    return this.usersService.login(email, password);
  }
}
