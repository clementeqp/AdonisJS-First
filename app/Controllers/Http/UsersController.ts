import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import { schema, rules} from '@ioc:Adonis/Core/Validator';


export default class UsersController {

  // SELECT * from users
  public async index({response}) {
        const users = await User.all()
      return response.json(users)
  }



  // Crear user
  public async store({request,response}: HttpContextContract) {

    const data = request.only(['name', 'email', 'password']);

    const user = await User.create(data);

    return response.json(user);


  }


  public async show({params}: HttpContextContract) {
    return User.findOrFail(params.id);
  }

  public async update({params, request}: HttpContextContract) {
    const body = request.body();
    const user = await User.findOrFail(params.id);
    user.merge(body); // update the user with the new data user.name=body.name
    return user.save();

  }

  public async destroy({params, response}: HttpContextContract) {
    const user = await User.findOrFail(params.id);

    response.status(204);

    return user.delete();
   /*  await user.delete();
    return {message: 'User deleted'} */;

  }

}
