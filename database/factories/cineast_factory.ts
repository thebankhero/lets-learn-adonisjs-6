import Cineast from '#models/cineast'
import factory from '@adonisjs/lucid/factories'
import { MovieFactory } from './movie_factory.js'

export const CineastFactory = factory
  .define(Cineast, async ({ faker }) => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      headshotUrl: faker.image.avatar(),
    }
  })
  .relation('moviesDirected', () => MovieFactory)
  .relation('moviesWritten', () => MovieFactory)
  .relation('castMovies', () => MovieFactory)
  .relation('castMovies', () => MovieFactory)
  .build()
