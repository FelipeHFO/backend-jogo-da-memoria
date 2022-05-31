import { CrudOptions } from '@nestjsx/crud';
import { UsersEntity } from './entities/users.entity';

export const usersCrudOptions: CrudOptions = {
  model: { type: UsersEntity },
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'createManyBase',
      'updateOneBase',
      'deleteOneBase',
    ],
  },
  query: {
    limit: 10,
  },
};
