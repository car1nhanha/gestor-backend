import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pasta, PastaSchema } from './entities/pasta.entity';
import { PastasController } from './pastas.controller';
import { PastasService } from './pastas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pasta.name, schema: PastaSchema }]),
  ],
  controllers: [PastasController],
  providers: [PastasService],
})
export class PastasModule {}
