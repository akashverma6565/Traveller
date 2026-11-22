import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { UserModule } from './user/user.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
