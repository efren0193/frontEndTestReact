import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBInput 
} from "mdb-react-ui-kit";
import List from '../components/WeatherList'

const Favorites = () => {
    //states and actionStates
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    
    //loads cities from LocalStorage
    useEffect(() => {
        setLoading(true)
        let all = JSON.parse(localStorage.getItem('cities')) || []
        if(search){
            all = all.filter(el => {
                return el.name.toLowerCase().includes(search.toLowerCase())
            })
        }
        setCities(all)
        setLoading(false)
    }, [search])//watch search input

    const handleKeyUp = (e) => {//function for keyup search input
        setSearch(e.target.value)
    }

    return(
        <main>
            <MDBContainer size="md">
                <section className="text-center my-5">
                    <h2>Favoritos</h2>
                    <hr/>
                    <MDBRow>
                        <MDBInput label='Buscar Favoritos' onKeyUp={handleKeyUp}/>
                        <List cities={cities} loading={loading} from="favorites"/>
                    </MDBRow>
                </section>
            </MDBContainer>
        </main>
    )
}

export default Favorites