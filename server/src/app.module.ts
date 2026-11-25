import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { UserModule } from './user/user.module.js';
import { DbModule } from './db/db.module.js';
import { AuthModule } from './auth/auth.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [DbModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
