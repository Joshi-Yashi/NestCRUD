import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from '../dto/customer.dto';

@Injectable()
export class CrmService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  create(dto: CreateCustomerDto) {
    const customer = this.customerRepo.create(dto);
    return this.customerRepo.save(customer);
  }

  findAll() {
    return this.customerRepo.find();
  }

  findOne(id: number) {
    return this.customerRepo.findOneBy({ id });
  }

  update(id: number, dto: CreateCustomerDto) {
    return this.customerRepo.update(id, dto);
  }

  remove(id: number) {
    return this.customerRepo.delete(id);
  }
}
