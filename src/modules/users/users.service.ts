import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseTypeOrmCrudService } from 'src/common/services/base-type-orm-crud.service';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService extends BaseTypeOrmCrudService<UsersEntity> {
  constructor(
    @InjectRepository(UsersEntity) usersRepository: Repository<UsersEntity>,
  ) {
    super(usersRepository);
  }
}
