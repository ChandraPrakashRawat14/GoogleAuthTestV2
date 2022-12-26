import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: '377382968314-91kbcbiggicm4mvflepgdmi2e2eho8hl.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3002/auth/google/callback',
            scope: ['email', 'profile'],
        });
    }
    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails, photos } = profile
        console.log(profile);
        console.log();
        
        
        const user = {
            profile,
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        }
        done(null, user);
    }
}