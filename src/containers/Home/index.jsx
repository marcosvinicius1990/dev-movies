import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Container, Info, Poster, ContainerButtons } from './styles'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'

function Home() {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [popular, setPopular] = useState()

    useEffect(() => {

        async function getMovies() {
            const {
                data: { results }
            } = await api.get('/movie/popular')

            setMovie(results[4])
        }

        async function getTopMovies() {
            const {
                data: { results }
            } = await api.get('/movie/top_rated')

            console.log(results)
            setTopMovies(results)
        }

        async function getTopSeries() {
            const {
                data: { results }
            } = await api.get('/tv/top_rated')

            console.log(results)
            setTopSeries(results)
        }
       
       
        async function getPopularSeries() {
            const {
                data: { results }
            } = await api.get('/tv/popular')

            console.log(results)
            setPopularSeries(results)
        }
       
        async function getPopular() {
            const {
                data: { results }
            } = await api.get('/person/popular')

            console.log('top artistas' + results)
            setPopular(results)
        }
       

        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getPopular()

    }, [])

    return (
        <>
            {movie && (
                <Background
                    img={getImages(movie.backdrop_path)}
                >
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red>Assista Agora</Button>
                                <Button>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img
                                alt="capa-do-filme"
                                src={getImages(movie.poster_path)}
                            />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {popular && <Slider info={popular} title={'Top Artistas'} />}
        </>
    )
}

export default Home 