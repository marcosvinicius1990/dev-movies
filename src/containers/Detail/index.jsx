import { useEffect, useState } from 'react'
import { Container, Background, Cover } from './styles'
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from '../../services/getData'
import { useParams } from 'react-router-dom'
import { getImages } from '../../utils/getImages'

function Detail() {

    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()
    useEffect(() => {

        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
                .then(([movie, videos, credits, similar]) => {
                    console.log({ movie, videos, credits, similar })
                    setMovie(movie)
                    setMovie(videos)
                    setTopSeries(credits)
                    setPopularSeries(similar)
                })
                .catch((error) => console.error(error))
        }
        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <div>Detalhe</div>
                    </Container>
                </>
            )}
        </>
    )
}

export default Detail


