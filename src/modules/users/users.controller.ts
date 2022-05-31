import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudRequest, Override, ParsedRequest } from '@nestjsx/crud';
import { UpdateResult } from 'typeorm';
import { usersCrudOptions } from './users.crud';
import { UsersService } from './users.service';

@Controller('/users')
@UseGuards(AuthGuard('jwt'))
@Crud(usersCrudOptions)
export class UsersController {
  constructor(public service: UsersService) {}

  @Override()
  async deleteOne(@ParsedRequest() req: CrudRequest): Promise<UpdateResult> {
    const { value: id } = req.parsed.paramsFilter.find(
      (f) => f.field === 'id' && f.operator === '$eq',
    );
    return await this.service.softDelete(id);
  }
}
