import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  providers: [AuthService,GoogleStrategy],
  exports:[GoogleStrategy]
})
export class AuthModule {}
