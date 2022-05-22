import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { map } from 'lodash';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/entities/user.entity';

const repeatKey = (array = []) => {
  const arayCount = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const arrayCountArray = Object.keys(arayCount).map((key) => {
    return { key, count: arayCount[key] };
  });

  return arrayCountArray;
};

@Injectable()
export class InitialsService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getData() {
    try {
      const allUsers = await this.userModel.find().exec();

      const state = map(allUsers, (o) => {
        return o.state;
      });

      const city = map(allUsers, (o) => {
        return o.city;
      });
      // const gestor = find(allUsers, (o) => {
      //   return o.gestor;
      // });
      const voluntario = map(allUsers, (o) => {
        return o.function;
      });

      return {
        state: repeatKey(state),
        city: repeatKey(city),
        // gestor,
        voluntario: repeatKey(voluntario),
      };
    } catch (error) {
      return {
        state: 0,
        city: 0,
        gestor: 0,
        voluntario: 0,
      };
    }
  }
}
