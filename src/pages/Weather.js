import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import List from '../components/WeatherList'

const Weather = () => {
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(false)
    //get data from openweathermap and set data to cities state
    useEffect(() => {
        setLoading(true)
        fetch('https://api.openweathermap.org/data/2.5/find?lat=21.18&lon=-98.86&cnt=10&units=metric&appid=da488f9b59703fa30d11f5269ec88e09')
        .then(res => res.json())
        .then(data => {
            setCities(data.list)
            setLoading(false)
        })
    }, [])


    return(
        <main>
            <MDBContainer size="md">
                <section className="text-center my-5">
                    <h2>Ciudades</h2>
                    <hr/>
                    <MDBRow>
                        <List cities={cities} loading={loading} from="weather" />
                    </MDBRow>
                </section>
            </MDBContainer>
        </main>
    )
}

export default Weather