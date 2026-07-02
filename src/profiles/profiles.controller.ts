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
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(id);
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
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return { id };
  }
}
