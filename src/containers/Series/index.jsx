import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPopularSeries, getTopSeries } from "../../services/getData"
import Slider from "../../components/Slider"
import { Container } from "./styles"

function Series() {

    const { id } = useParams()

    const [topSeriesSeries, setTopSeriesSeries] = useState(id)
    const [topPopularSeriesSeries, setTopPopularSeries] = useState(id)

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getTopSeries(id),
                getPopularSeries(id),
            ])

            .then(([serie, popular,]) => {
                setTopSeriesSeries(serie)
                setTopPopularSeries(popular)
            })

            .catch((error) => console.error)

        }
        getAllData()


    },[])

    return (

        <>
            <Container>
           
            

            {topSeriesSeries && <Slider info={topSeriesSeries} title={'Top series'} />}
            {topPopularSeriesSeries && <Slider info={topPopularSeriesSeries} title={'Series populares'} />}

            </Container>
            
        </>

        )
}

export default Series




