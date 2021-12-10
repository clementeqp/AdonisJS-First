export default class UsersController {

    public async index({ auth }: HttpContextContract) {
        await auth.authenticate()

        const userIndex = await User.all()
        return userIndex
    }

   public async show({ auth, params }: HttpContextContract) {
        try {
            await auth.authenticate()
            
            const userShow = await User.findOrFail(params.id)
            return userShow
        }
        catch (e) { return 'Error, item not found' }
    }

    public async store({ request }: HttpContextContract) {
        const handler = await request.validate(CreateCandidateValidator)
        const userStore = await User.create(handler)
        return userStore
    }

    public async update({ auth, request, params }: HttpContextContract) {
        try {
            await auth.authenticate()
            const userUpdate = await User.findOrFail(params.id)
            const handler = request.body()
            userUpdate.merge(handler)
            await userUpdate.save()
            return userUpdate
        }

        catch (e) { return 'Error, item not found' }

    }
    public async destroy({ auth, params }: HttpContextContract) {
        try {
            await auth.authenticate()
            const userDestroy = await User.findOrFail(params.id)
            await userDestroy.delete()
            return 'Succesfully deleted'
        }
        catch (e) { return 'Error, item not found' }
    }
}
