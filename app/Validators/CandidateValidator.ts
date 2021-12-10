import { schema, rules } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateCandidateValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    name: schema.string({}, [rules.maxLength(50)]),
    email: schema.string({}, [rules.email()]),
    mobile: schema.string({}, [rules.maxLength(12)]),
    birthdate: schema.date({format: 'iso'}),
    salary_now: schema.number(),
    salary_desired: schema.number(),
    location: schema.string({}, [rules.maxLength(150)]),
    country: schema.string({}, [rules.maxLength(150)]),
    remote: schema.boolean(),
    mobility: schema.boolean(),
    active: schema.boolean(),
    userId: schema.number()
  })
  public messages = {}
}
