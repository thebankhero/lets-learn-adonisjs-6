import Movie from '#models/movie'

type MovieSortOption = {
  id: string
  text: string
  field: keyof Movie
  dir: 'asc' | 'desc' | undefined
}
export default class MovieService {
  static sortOptions: MovieSortOption[] = [
    { id: 'title_asc', text: 'Title (asc)', field: 'title', dir: 'asc' },
    { id: 'title_desc', text: 'Title (desc)', field: 'title', dir: 'desc' },
    { id: 'releasedAt_asc', text: 'Release At (asc)', field: 'releasedAt', dir: 'asc' },
    { id: 'releasedAt_desc', text: 'Release At (desc)', field: 'releasedAt', dir: 'desc' },
  ]

  static getFiltered(filters: Record<string, any>) {
    const sort =
      this.sortOptions.find((option) => option.id === filters.sort) || this.sortOptions[0]

    return Movie.query()
      .if(filters.search, (query) => query.whereILike('title', `%${filters.search}%`))
      .if(filters.status, (query) => query.where('statusId', filters.status))
      .preload('director')
      .preload('writer')
      .preload('status')
      .whereNotNull('releasedAt')
      .orderBy(sort.field, sort.dir)
      .limit(15)
  }
}
