import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CrmService } from './crm.service';
import { CreateCustomerDto } from '../dto/customer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CrmController {
  constructor(private readonly crmService: CrmService) {}

  @Post()
  create(@Body() dto: CreateCustomerDto) {
    return this.crmService.create(dto);
  }

  @Get()
  findAll() {
    return this.crmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crmService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateCustomerDto) {
    return this.crmService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crmService.remove(+id);
  }
}
