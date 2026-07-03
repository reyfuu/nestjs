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
  NotFoundException,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateProfilesDto } from './dto/create-profiles.dto';
import { UpdateProfilesDto } from './dto/update-profiles.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    try {
      return this.profilesService.findOne(id);
    } catch (error) {
      throw new NotFoundException('Profile not found');
    }
  }

  /**ini method untuk post */

  @Post()
  create(@Body() createProfilesDto: CreateProfilesDto) {
    return this.profilesService.Create(createProfilesDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfilesDto: UpdateProfilesDto,
  ) {
    return this.profilesService.update(id, updateProfilesDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.profilesService.delete(id);
  }
}
