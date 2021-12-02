import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/* De **Skill** tendremos:

- Nombre (string) */

export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  public skillId: number

  @column()
  public name: string

}
