import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import User from 'App/Models/User';
import UserValidator from 'App/Validators/UserValidator';





export default class AuthController {
  public async register({ request, response }: HttpContextContract) {


    const data = await request.validate(UserValidator)
    const user = await User.create(data)


    return response.created(user);

  }

  public async login({ auth, request, response }: HttpContextContract) {

    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '7days'
      })

      return response.ok({
        token,
        user: auth.user
      })


    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async logout({ auth, response }: HttpContextContract) {

    await auth.logout()
    return response.status(200)

  }
}
