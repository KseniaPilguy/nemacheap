import type { NextApiRequest, NextApiResponse } from 'next'

import data from './data.json'

const IMAGES_BASE_PATH = "https://image.tmdb.org/t/p/w500"

export default function GetMoviesBySearchApi(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const search = req.query.searchValue as string
    const mappedData = data.results.map(movie => ({...movie, poster_path: `${IMAGES_BASE_PATH}${movie.poster_path}`}))
      .filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    res.status(200).json(mappedData)
}
