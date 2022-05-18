import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  function: string;

  @Prop()
  avatar: string;

  @Prop()
  description: string;

  @Prop()
  password: string;

  @Prop()
  level: number;

  @Prop()
  pasta: [
    {
      nome: mongoose.Schema.Types.ObjectId;
    },
  ];

  @Prop()
  cep: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
