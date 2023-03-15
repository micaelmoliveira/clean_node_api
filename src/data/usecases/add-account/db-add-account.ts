import { type Encrypter } from 'src/data/protocols/encrypter'
import { type AccountModel } from 'src/domain/models/account'
import { type AddAccountModel, type AddAccount } from 'src/domain/use-cases/add-account'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => { resolve({ ...account, id: 'test' }) })
  }
}
