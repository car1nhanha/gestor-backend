import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InitialsService } from './initials.service';

@Controller('initials')
@ApiTags('initials')
export class InitialsController {
  constructor(private readonly initialsService: InitialsService) {}

  @Get()
  @ApiOperation({ summary: 'Dados para a tela inicial do projeto' })
  @ApiResponse({
    status: 200,
    description: 'Dados obtidos com sucesso.',
  })
  getData() {
    return this.initialsService.getData();
  }
}
