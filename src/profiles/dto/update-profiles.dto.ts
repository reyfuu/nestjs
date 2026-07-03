import { IsString, MinLength } from 'class-validator';

export class UpdateProfilesDto {
  @IsString()
  @MinLength(2)
  name: string = '';

  @IsString()
  @MinLength(2)
  description: string = '';
}
