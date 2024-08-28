import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';

@Injectable()
export class UserRepository {
  connection: Connection;

  save() {
    console.info('User saved with connection:', this.connection.getName());
  }
}

export function createUserRepository(connection: Connection): UserRepository {
  const userRepository = new UserRepository();
  userRepository.connection = connection;
  return userRepository;
}
