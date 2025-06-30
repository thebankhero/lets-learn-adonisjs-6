import MovieStatuses from '#enum/movie_statuses'
import Roles from '#enum/roles'
import MovieStatus from '#models/movie_status'
import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Role.createMany([
      { id: Roles.USER, name: 'User' },
      { id: Roles.ADMIN, name: 'Admin' },
    ])

    await MovieStatus.createMany([
      { id: MovieStatuses.WRITING, name: 'Writing' },
      { id: MovieStatuses.CASTING, name: 'Casting' },
      { id: MovieStatuses.PRODUCTION, name: 'Production' },
      { id: MovieStatuses.POST_PRODUCTION, name: 'Post Production' },
      { id: MovieStatuses.RELEASED, name: 'Released' },
    ])
  }
}
