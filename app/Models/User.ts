
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/* De **User** tendremos:

- Nombre completo (string)
- Correo electrónico (string)
- Contraseña (string) */

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public userId: number
  @column()
  public name: string
  @column()
  public email: string
  @column()
  public password: string

}
