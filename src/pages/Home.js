import React from 'react'
import { Link}  from 'react-router-dom'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRipple,
    MDBCardImage
} from "mdb-react-ui-kit";

const Index = () => {
    return(
        <main>
        <MDBContainer size="md">
            <section className="text-center my-5">
                <h2>Explora</h2>
                <hr/>
                <MDBRow className='row-cols-2'>
                    <MDBCol  >
                        <MDBCard >
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src='https://mdbootstrap.com/img/Photos/Others/images/49.jpg' fluid alt='...' />
                                <Link to="weather">
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </Link>
                            </MDBRipple>
                            <MDBCardBody>
                            <MDBCardTitle tag="h5">Clima</MDBCardTitle>
                            <MDBCardText>
                                Descubre los climas de las diferentes ciudades.
                            </MDBCardText>
                            <Link role="button" color="primary" size="md" to="weather" >
                                Explorar
                            </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src='https://mdbootstrap.com/img/Photos/Others/images/48.jpg' fluid alt='...' />
                                <Link to="favorites">
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </Link>
                            </MDBRipple>
                            <MDBCardBody>
                            <MDBCardTitle tag="h5">Favoritos</MDBCardTitle>
                            <MDBCardText>
                                Mira tus ciudades favoritas.
                            </MDBCardText>
                            <Link color="primary" size="md" to="favorites">
                                Explorar
                            </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
    </main>
    )
}

export default Index