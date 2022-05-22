import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { InitialsController } from './initials.controller';
import { InitialsService } from './initials.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [InitialsController],
  providers: [InitialsService],
})
export class InitialsModule {}
