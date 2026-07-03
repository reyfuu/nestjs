import { Injectable ,NotFoundException} from '@nestjs/common';
import {randomUUID} from 'crypto';
import { CreateProfilesDto } from './dto/create-profiles.dto';
import { UpdateProfilesDto } from './dto/update-profiles.dto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
            id:randomUUID(),
            name: 'Brianna Watts',
            description: `Looking for someone to emrge with my heart. I'm a full-stack romatic who
            refactors my feelings untuk they pass all test. Bonus points if you can debug my issues 
            while we pair program over coffee. Let's commit to something beautiful together`,
        },
        {
            id:randomUUID(),
            name: 'Jasper Quinn',
            description:`Seeking a partner in croime to compile my heart. Must be comfortable with the
            terminal because I only speak fluent bash, Swipe right if you can appreciate a good kernel
            panic every now and then.`
        },
        {
            id:randomUUID(),
            name: 'Leo Park',
            description: `You thikj you know VIM? Try Neovim. I'll make your modal dreams come true. Want
            to escape the matrix and explore the perfect keyboard shorcut for love`
        },
    ];

    findAll(){
        return this.profiles;
    }
    findOne(id: string){
        
        const macthingProfile = this.profiles.find((profile) => profile.id === id);

        return macthingProfile;
    }

    Create(createProfilesDto: CreateProfilesDto){
        const newProfile = {
            id: randomUUID(),
            ...createProfilesDto,
        };
        this.profiles.push(newProfile);
        return newProfile;
    }
    update(id: string, updateProfilesDto: UpdateProfilesDto){
        const profileIndex = this.profiles.findIndex((profile) => profile.id === id);
        if(profileIndex === -1){
            throw new NotFoundException('Profile not found');
        }
        this.profiles[profileIndex] = {
            ...this.profiles[profileIndex],
            ...updateProfilesDto,
        };
        return this.profiles[profileIndex];
    }
    delete(id: string){
        const profileIndex = this.profiles.findIndex((profile) => profile.id === id);
       
        if(profileIndex === -1){
            throw new NotFoundException('Profile not found');
        }
        this.profiles.splice(profileIndex, 1);
        return { message: 'Profile deleted successfully' };
    }
}
