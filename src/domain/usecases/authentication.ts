import { IAccountModel } from '../models/account-model';

type AuthenticationParams = {
  email: string;
  password: string;
};

export interface IAuthentication {
  auth(data: AuthenticationParams): Promise<IAccountModel>;
}
