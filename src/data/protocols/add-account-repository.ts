import { type AccountModel } from 'src/domain/models/account'
import { type AddAccountModel } from 'src/domain/use-cases/add-account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
