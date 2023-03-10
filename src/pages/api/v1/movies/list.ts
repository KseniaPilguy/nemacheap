import type { NextApiRequest, NextApiResponse } from 'next'

import data from './data.json'

const IMAGES_BASE_PATH = "https://image.tmdb.org/t/p/w500"

export default function moviesApi(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const mappedData = data.results.map(movie => ({...movie, poster_path: `${IMAGES_BASE_PATH}${movie.poster_path}`}))
    res.status(200).json(mappedData)
}
