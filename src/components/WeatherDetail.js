import React from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCard,
  MDBCardBody,
  MDBInputGroup,
  MDBInputGroupText,
  MDBIcon,
  MDBCardTitle
} from 'mdb-react-ui-kit';

const WeatherDetail = ({modal, toggleShow, detail, buttons, from}) => {
    if(detail){
        return (
            <MDBModal staticBackdrop  show={modal} tabIndex='-1'>
            <MDBModalDialog>
                <MDBModalContent>
                <MDBModalHeader>
                    <MDBModalTitle>Detalles</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                
                <MDBModalBody>

                    <MDBCard >
                        <MDBCardBody>
                        <MDBInputGroup className="fix-modal-title">
                            <MDBCardTitle>Nombre: {detail.name}</MDBCardTitle>
                            <div >
                               <span> {from === 'weather' ? 'Agregar a ' : 'Remover de '} favorito:</span>
                                <MDBInputGroupText noBorder > 
                                    {buttons(from, detail)}
                                </MDBInputGroupText>
                            </div>
                        </MDBInputGroup>
                        <hr/>
                        <MDBInputGroup className='mb-3'>
                            <MDBInputGroupText>
                                <MDBIcon fas icon="home" />
                            </MDBInputGroupText>
                            <MDBInputGroupText noBorder style={{'display':'inline-table'}}> <span className="text-danger" >Main:</span> <pre>{JSON.stringify(detail.main,null, 1)}</pre></MDBInputGroupText>
                        </MDBInputGroup>

                        <MDBInputGroup className='mb-3'>
                            <MDBInputGroupText>
                                <MDBIcon fas icon="cloud" />
                            </MDBInputGroupText>
                            <MDBInputGroupText noBorder> <span className="text-danger">Cloud: &nbsp;</span> {detail.clouds.all}</MDBInputGroupText>
                        </MDBInputGroup>
                        <MDBInputGroup className='mb-3'>
                            <MDBInputGroupText>
                                <MDBIcon fas icon="map-marker-alt" />
                            </MDBInputGroupText>
                            <MDBInputGroupText noBorder> <span className="text-danger" >Coord:&nbsp; </span>Lat&nbsp; {detail.coord.lat},&nbsp; Lon {detail.coord.lon}</MDBInputGroupText>
                        </MDBInputGroup>
                        
                        
                        
                        <MDBInputGroup className='mb-3'>
                            <MDBInputGroupText>
                                <MDBIcon fas icon="sun" />
                            </MDBInputGroupText>
                            <MDBInputGroupText noBorder> <span className="text-danger">Weather: &nbsp; </span> {detail.weather[0].description}</MDBInputGroupText>
                        </MDBInputGroup>
                        <MDBInputGroup className='mb-3'>
                            <MDBInputGroupText>
                                <MDBIcon fas icon="wind" />
                            </MDBInputGroupText>
                            <MDBInputGroupText noBorder> <span className="text-danger" >Wind:  &nbsp;</span> Deg {detail.wind.deg},  &nbsp; Speed {detail.wind.speed}</MDBInputGroupText>
                        </MDBInputGroup>

                        </MDBCardBody>
                    </MDBCard>

                </MDBModalBody>

                <MDBModalFooter>
                    <MDBBtn color='primary' onClick={toggleShow}>
                    Cerrar
                    </MDBBtn>
                </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
            </MDBModal>
        );
    }
    return null
}

export default WeatherDetail