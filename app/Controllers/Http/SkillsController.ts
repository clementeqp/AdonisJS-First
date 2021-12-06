import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Skill from 'App/Models/Skill';

export default class SkillsController {
  public async index( ) {
    return Skill.all();
  }


  //Create
  public async store({request,response}: HttpContextContract) {
    //validation
    const body = request.body();
    // Create instance and save to database
    const skills = await Skill.create(body);
    response.status(201);
    return skills;

  }

  // Update
  public async update({request,params}: HttpContextContract) {
    const body = request.body();
    const skill = await Skill.findOrFail(params.id);
    skill.merge(body);
    await skill.save();
    return skill;
  }

  // destroy
  public async destroy({params,response}: HttpContextContract) {
    const skill = await Skill.findOrFail(params.id);
    await skill.delete();
    response.status(204);

    return skill;
  }
}
