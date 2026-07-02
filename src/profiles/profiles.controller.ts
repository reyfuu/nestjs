import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateProfilesDto } from './dto/create-profiles.dto';
import { UpdateProfilesDto } from './dto/update-profiles.dto';

@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  /**ini method untuk post */

  @Post()
  create(@Body() createProfilesDto: CreateProfilesDto) {
    return createProfilesDto;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfilesDto: UpdateProfilesDto,
  ) {
    return {
      id,
      ...updateProfilesDto,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return { id };
  }
}
