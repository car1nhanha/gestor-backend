import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PastasModule } from './pastas/pastas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
    PastasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
