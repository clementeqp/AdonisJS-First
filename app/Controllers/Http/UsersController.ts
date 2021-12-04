import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import { schema, rules} from '@ioc:Adonis/Core/Validator';


export default class UsersController {

  // SELECT * from users
  public async index() {
    return User.all();
  }



  public async store({request,response}: HttpContextContract) {
    //validation
    const newUserSchema = schema.create({

      name: schema.string({ trim: true }),

      email: schema.string({ trim: true },[
        rules.email(),
      ]),
      password: schema.string({},[
        rules.confirmed(),
      ])
    });

    const payload = await request.validate({schema: newUserSchema});
    // Create instance and save to database
    const user = await User.create(payload);
    response.status(201);
    return user;
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
