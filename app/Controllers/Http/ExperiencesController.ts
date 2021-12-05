import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Experience from 'App/Models/Experience';

export default class ExperiencesController {
  public async index( ) {
    return Experience.all();
  }


  //Create
  public async store({request,response}: HttpContextContract) {
    //validation
    const body = request.body();
    // Create instance and save to database
    const experience = await Experience.create(body);
    response.status(201);
    return experience;

  }

  // Update
  public async update({request,params}: HttpContextContract) {
    const body = request.body();
    const experience = await Experience.findOrFail(params.id);
    experience.merge(body);
    await experience.save();
    return experience;
  }

  // destroy
  public async destroy({params,response}: HttpContextContract) {
    const experience = await Experience.findOrFail(params.id);
    await experience.delete();
    response.status(204);

    return experience;
  }
}
