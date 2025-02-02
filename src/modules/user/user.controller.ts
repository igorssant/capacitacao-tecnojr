import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get('users')
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('user/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(+id);
  }

  @Patch('user/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete('user/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.remove(+id);
  }
}
