import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Candidate from 'App/Models/Candidate';

export default class CandidatesController {

  // SELECT * from users (FindAll)
  public async index(ctx: HttpContextContract) {
    return Candidate.all();
  }


  //Create
  public async store({request,response}: HttpContextContract) {
    //validation
    const body = request.body();
    // Create instance and save to database
    const candidate = await Candidate.create(body);
    response.status(201);
    return candidate;

  }

  // Update
  public async update({request,params,response}: HttpContextContract) {
    const body = request.body();
    const candidate = await Candidate.findOrFail(params.id);
    candidate.merge(body);
    await candidate.save();
    return candidate;
  }

  // destroy
  public async destroy({params,response}: HttpContextContract) {
    const candidate = await Candidate.findOrFail(params.id);
    await candidate.delete();
    response.status(204);

    return candidate;
  }

}
