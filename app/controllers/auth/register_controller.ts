import User from '#models/user'
import { registerValidator } from '#validators/auth'
import { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response }: HttpContext) {
    // 1. Grab our request data
    const data = request.only(['fullName', 'email', 'password'])

    // 2. Create our user
    const validaedData = await registerValidator.validate(data)
    const user = await User.create(validaedData)
    console.log({ user: user.serialize() })

    // 3. Login that user
    // 4. Return the user back to home

    return response.redirect().toRoute('home')
  }
}
