import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PastaDocument = Pasta & Document;

@Schema()
export class Pasta {
  @Prop()
  name: string;
}

export const PastaSchema = SchemaFactory.createForClass(Pasta);
