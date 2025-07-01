import MovieStatuses from '#enum/movie_statuses'
import Movie from '#models/movie'
import factory from '@adonisjs/lucid/factories'
import { DateTime } from 'luxon'
import { CineastFactory } from './cineast_factory.js'

export const MovieFactory = factory
  .define(Movie, async ({ faker }) => {
    return {
      statusId: MovieStatuses.WRITING,
      title: faker.music.songName(),
      summary: faker.lorem.sentence(),
      abstract: faker.lorem.paragraphs(),
      posterUrl: faker.image.urlPicsumPhotos({ width: 450, height: 200 }),
      releasedAt: null,
    }
  })
  .state('released', (row, { faker }) => {
    row.statusId = MovieStatuses.RELEASED
    row.releasedAt = DateTime.fromJSDate(faker.date.past())
  })
  .state('releasingSoon', (row, { faker }) => {
    row.statusId = MovieStatuses.RELEASED
    row.releasedAt = DateTime.fromJSDate(faker.date.past())
  })
  .state('postProduction', (row, { faker }) => {
    row.statusId = MovieStatuses.POST_PRODUCTION
    row.releasedAt = DateTime.fromJSDate(faker.date.past())
  })
  .relation('director', () => CineastFactory)
  .relation('writer', () => CineastFactory)
  .build()
