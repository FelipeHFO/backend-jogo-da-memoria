import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DeepPartial, UpdateResult } from 'typeorm';

export abstract class BaseTypeOrmCrudService<T> extends TypeOrmCrudService<T> {
  create(entityLike: DeepPartial<T>): T {
    return this.repo.create(entityLike);
  }

  async save(dto: DeepPartial<T>): Promise<T> {
    return await this.repo.save(dto);
  }

  async softDelete(id: number): Promise<UpdateResult> {
    return await this.repo.softDelete(id);
  }
}
