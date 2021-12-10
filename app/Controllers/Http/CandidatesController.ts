import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Candidate from 'App/Models/Candidate';

export default class CandidatesController {

  // SELECT * from users (FindAll)
  /* public async index({request}) {
    if (request.input('active')){
      return Candidate.query().where('active', request.input('active'));
    }
    return Candidate.all();
  } */

  public async index({ request }) {
    if (request.input('location')) {
      // Devuelve todos los candidatos que tengan la misma localización o remote = true
      return Candidate.query().where('location', request.input('location'))
        .orWhere('remote', true)
        .andWhere('active', true);
      // Filtro por pais
    } else if (request.input('country')) {
      return Candidate.query().where('country', request.input('country'))
        .andWhere('active', true);
      // filtro por remoto
    } else if (request.input('remote')) {
      return Candidate.query().where('remote', true)
        .andWhere('active', true);

      //Devuelve todos los que tengan salary_desired menor que el salario por parametro
    } else if (request.input('salary_desired')) {
      return Candidate.query().where('salary_desired', '<', request.input('salary_desired'))
        .andWhere('active', true);

    } else {
      return Candidate.query().where('active', true);
    }


  }

  // candidato por id con experiences y skilll
  public async findCandidateWithSkillsAndExperiences({ params,response }: HttpContextContract) {
      const candidate = await Candidate.findOrFail(params.id)
      await candidate.load('experiences',(expQuery)=>{expQuery.preload('skill')})

    return response.json(candidate);
  }

  //candidatos con  skill y experiences
  public async findCandidatesWithSkillsAndExperiences({  response }: HttpContextContract) {

    const candidates = await Candidate
      .query()
      .preload('experiences',(expQuery)=>{expQuery.preload('skill')})


    return response.json(candidates)
  }

  //Candidatos con experiences
  public async findCandidatesWithExperiences({ response }: HttpContextContract) {

    const candidates = await Candidate
        .query()
        .preload('experiences')


    return response.json(candidates)
  }



  //filtro por skill y experiences
  public async findBySkillsAndExperiences({ params, response }: HttpContextContract) {
    const candidates = await Candidate
      .query()
      .preload('experiences', (expQuery) => {
        expQuery.where('level', params.level)
          .preload('skill', (skillQuery) => { skillQuery.where('name', params.name) }
          )
      })

    return response.json(candidates);
  }


  // SELECT * from users (FindOne)
  public async show({ params }: HttpContextContract) {
    return Candidate.findOrFail(params.id);
  }


  //Create
  public async store({ request, response }: HttpContextContract) {
    //validation
    const body = request.body();
    // Create instance and save to database
    const candidate = await Candidate.create(body);
    response.status(201);
    return candidate;

  }

  // Update
  public async update({ request, params }: HttpContextContract) {
    const body = request.body();
    const candidate = await Candidate.findOrFail(params.id);
    candidate.merge(body);
    await candidate.save();
    return candidate;
  }

  // destroy
  public async destroy({ params, response }: HttpContextContract) {
    const candidate = await Candidate.findOrFail(params.id);
    await candidate.delete();
    response.status(204);

    return candidate;
  }

}
