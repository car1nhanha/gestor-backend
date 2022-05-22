import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PastasModule } from './pastas/pastas.module';
import { UsersModule } from './users/users.module';
import { InitialsModule } from './initials/initials.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
    PastasModule,
    InitialsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
