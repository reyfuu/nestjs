import { IsString, Length } from 'class-validator';

export class CreateProfilesDto {
  @IsString()
  @Length(2, 100)
  name: string = '';
  
  @IsString()
  @Length(2, 200)
  description: string = '';
}
