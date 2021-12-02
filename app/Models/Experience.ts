import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/*
De **Experience** tendremos:

- *Candidate* (relación)
- *Skill* (relación)
- Nivel (enum - junior, semi-senior o senior)

*/

export default class Experience extends BaseModel {
  @column({ isPrimary: true })
  public experienceId: number
  @column()
  public candidateId: number
  @column()
  public skillId: number
  //Enum junior, semi-senior o senior
  @column()
  public level: string
}
