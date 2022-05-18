import { ApiProperty } from '@nestjs/swagger';

export class CreatePastaDto {
  @ApiProperty({
    description: 'Nome da pasta',
  })
  name: string;
}
