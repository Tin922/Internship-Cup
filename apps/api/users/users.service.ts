import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    preferredCity: string,
    preferredCounty: string,
    receiveNotifications: boolean,
    profilePhoto: string,
    email: string,
    password: string,
  ) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        dateOfBirth,
        preferredCity,
        preferredCounty,
        receiveNotifications,
        profilePhoto,
        email,
        password: hashedPassword,
      },
    });

    const payload = {
      id: user.id,
      email: user.email,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new BadRequestException('User does not exist');

    const isPasswordVaild = await compare(password, user.password);

    if (!isPasswordVaild) throw new ForbiddenException('Password not valid');

    const payload = {
      id: user.id,
      email: user.email,
    };
    return { token: this.jwtService.sign(payload) };
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}
