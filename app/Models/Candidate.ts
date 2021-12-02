import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/*De **Candidate** tendremos:

- Nombre completo (string)
- Correo electrónico (string)
- Teléfono (string)
- Fecha de nacimiento (date)
- Salario actual (número)
- Salario deseado (número)
- Localidad (string)
- País (string)
- Remoto (boolean)
- Movilidad geográfica (boolean)
- Activo (boolean)
- *User* (relación)
*/

export default class Candidate extends BaseModel {
  @column({ isPrimary: true })
  public candidateId: number

  @column()
  public name: string
  @column()
  public email: string
  @column()
  public phone: string
  @column()
  public birthdate: DateTime
  @column()
  public salaryNow: number
  @column()
  public salaryDesired: number
  @column()
  public location: string
  @column()
  public country: string
  @column()
  public remote: boolean
  @column()
  public mobility: boolean
  @column()
  public active: boolean
  @column()
  public userId: number
}
