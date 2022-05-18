import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePastaDto } from './dto/create-pasta.dto';
import { UpdatePastaDto } from './dto/update-pasta.dto';
import { PastasService } from './pastas.service';

@Controller('pastas')
@ApiTags('Pastas')
export class PastasController {
  constructor(private readonly pastasService: PastasService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma pasta' })
  @ApiResponse({
    status: 200,
    description: 'Pasta criada com sucesso',
  })
  @ApiBody({ type: CreatePastaDto })
  create(@Body() createPastaDto: CreatePastaDto) {
    return this.pastasService.create(createPastaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as pastas' })
  @ApiResponse({
    status: 200,
    description: 'Pastas listadas com sucesso',
  })
  findAll() {
    return this.pastasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma pasta pelo id' })
  @ApiResponse({
    status: 200,
    description: 'Pasta encontrada com sucesso',
  })
  findOne(@Param('id') id: string) {
    return this.pastasService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma pasta' })
  @ApiResponse({
    status: 200,
    description: 'Pasta atualizada com sucesso',
  })
  update(@Param('id') id: string, @Body() updatePastaDto: UpdatePastaDto) {
    return this.pastasService.update(id, updatePastaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta uma pasta' })
  @ApiResponse({
    status: 200,
    description: 'Pasta deletada com sucesso',
  })
  remove(@Param('id') id: string) {
    return this.pastasService.remove(id);
  }
}
