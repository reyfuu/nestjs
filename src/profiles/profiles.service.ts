import { Injectable } from '@nestjs/common';
import {randomUUID} from 'crypto';

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
        return this.profiles.find((profile) => profile.id === id);
    }
}
