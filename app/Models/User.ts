


import { BaseModel, beforeSave, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Candidate from './Candidate'
import Hash from '@ioc:Adonis/Core/Hash';

/* De **User** tendremos:

- Nombre completo (string)
- Correo electrónico (string)
- Contraseña (string) */

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public name: string
  @column()
  public email: string
  @column({ serializeAs: null })
  public password: string
  @column()
  public rememberMeToken?: string

  @hasMany(() => Candidate)
  public candidates: HasMany<typeof Candidate>

  @column.dateTime({ autoCreate: true, serialize: (value:DateTime)=>value.toFormat('yyyy-MM-dd HH:mm') })
  public createdAt: DateTime;
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }



  }

}
