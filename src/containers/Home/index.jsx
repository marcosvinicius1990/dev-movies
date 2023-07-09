import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Container, Info, Poster, ContainerButtons } from './styles'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'
import { getMovies, getPopular, getPopularSeries, getTopMovies } from '../../services/getData'

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [popular, setPopular] = useState()
    const navigate = useNavigate()

    useEffect(() => {

        async function getAllData() {
            Promise.all([
                getMovies(),
                getTopMovies(),
                setTopSeries(),
                getPopularSeries(),
                getPopular()
            ])
                .then(([movie, topMovies, TopSeries,popularSeries, popular]) => {
                    setMovie(movie)
                    setTopMovies(topMovies)
                    setTopSeries(TopSeries)
                    setPopularSeries(popularSeries)
                    setPopular(popular)
                })
                .catch((error) => console.error(error))          
        }
        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>
                                    Assista o Trailer
                                </Button>
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