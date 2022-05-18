import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'jhon@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'função do usuário',
    example: 'voluntário',
  })
  function: string;

  @ApiProperty({
    description: 'Avatar do usuário',
    example: 'https://avatars.githubusercontent.com/u/34972401?v=4',
  })
  avatar: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: '12345678',
  })
  password: string;

  @ApiProperty({
    description: 'Nível do usuário',
    example: '1',
  })
  level: number;

  @ApiProperty({
    description: 'Pasta do usuário',
  })
  pasta: [
    {
      nome: mongoose.Schema.Types.ObjectId;
    },
  ];

  @ApiProperty({
    description: 'Endereço do usuário',
    example: '76873644',
  })
  cep: string;

  @ApiProperty({
    description: 'Cidade do usuário',
  })
  city: string;

  @ApiProperty({
    description: 'Estado do usuário',
  })
  state: string;

  @ApiProperty({
    description: 'Data de criação do usuário',
    example: '2020-06-01T00:00:00.000Z',
  })
  createdAt: Date;
}
