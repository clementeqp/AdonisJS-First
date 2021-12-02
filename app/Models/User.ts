
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Candidate from './Candidate'

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
  @column()
  public password: string

  @hasMany(() => Candidate)
  public candidates: HasMany<typeof Candidate>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

}
