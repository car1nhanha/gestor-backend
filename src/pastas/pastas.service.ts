import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePastaDto } from './dto/create-pasta.dto';
import { UpdatePastaDto } from './dto/update-pasta.dto';
import { Pasta, PastaDocument } from './entities/pasta.entity';

@Injectable()
export class PastasService {
  constructor(
    @InjectModel(Pasta.name) private pastaModel: Model<PastaDocument>,
  ) {}

  create(createPastaDto: CreatePastaDto) {
    const createdPasta = new this.pastaModel(createPastaDto);
    return createdPasta.save();
  }

  findAll() {
    return this.pastaModel.find().exec();
  }

  findOne(id: string) {
    return this.pastaModel.findOne({ _id: id }).exec();
  }

  update(id: string, updatePastaDto: UpdatePastaDto) {
    return this.pastaModel.updateOne({ _id: id }, updatePastaDto).exec();
  }

  remove(id: string) {
    return this.pastaModel.deleteOne({ _id: id }).exec();
  }
}
