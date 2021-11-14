import React from 'react'
import { Link}  from 'react-router-dom'
import {
    MDBContainer
} from "mdb-react-ui-kit";

const NotFound = () => {
    return(
        <main>
           <MDBContainer size="md">
                <section className="text-center my-5">
                    <h2>Página no encontrada</h2>
                    <hr/>
                    <h5>Regresar a <Link to="/">Inicio</Link></h5>
                </section>
            </MDBContainer>
        </main>
    )
}

export default NotFound