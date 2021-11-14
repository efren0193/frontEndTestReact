import React, {useState} from 'react';
import { 
    MDBTable, 
    MDBTableHead, 
    MDBTableBody,
    MDBIcon,
    MDBBtn,
} from 'mdb-react-ui-kit';
import ModalDetail from '../components/WeatherDetail'
import { addFavorite, removeFavorite, verifyAdded } from '../utils/Favorite';

const WeatherList = ({cities, loading, from}) => {
    const [modal, setModal] = useState(false);
    const [detail, setDetail] = useState(null)

    //function for show/hide modal and assign detail state info
    const toggleShow = (e) => {
        setModal(!modal);
        if(!modal){ 
            setDetail(e)
        }
    };
    //function DOM return, validate favorite exist and depending from component mount render button
    const switchBtn = (location, c) => {
        if(location === 'weather'){
           return checkAdded(c)
        }else{
            return <MDBBtn color='danger' className="m-auto" floating onClick={() => {removeFavorite(c); alertMsg('del',c)}}>
                        <MDBIcon fas icon="trash" />
                    </MDBBtn>
        }
    } 

    const checkAdded = (c) => {
        if(verifyAdded(c)){
            return <MDBBtn color='danger' className="m-auto" floating disabled>
                    <MDBIcon fas icon="heart" />
                </MDBBtn>
        }else{
            return <MDBBtn color='danger' className="m-auto" floating onClick={() => {addFavorite(c); alertMsg('add', c)}}>
                        <MDBIcon fas icon="heart" />
                    </MDBBtn>
        }
    }
    //reload page
    const alertMsg = (l, c) => {
        let msg = ''
        if(l == 'add'){
            msg = 'Agregaste ' + c.name + ' a Favoritos.'
        }else{
            msg = 'Eliminaste ' + c.name + ' de Favoritos.'
        }
        //alert(msg)
        window.location.reload()
    }
    //render list from parent state
    const renderList = () => {
        return cities.map(c => {
            return <tr key={c.id}>
                        <td>C</td>
                        <td>{c.name}</td>
                        <td>
                            {switchBtn(from, c)}
                        </td>
                        <td>
                            <MDBBtn onClick={() => toggleShow(c)} rounded className='mx-2' color='info'>
                                Ver
                            </MDBBtn>
                        </td>
                    </tr>
        })
    }
    return <>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Unidades</th>
                        <th scope='col'>Ciudad</th>
                        <th scope='col'>{from === 'weather' ? 'Agregar a ' : 'Remover de '}Favorito</th>
                        <th scope='col'>Detalles</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        
                        {loading && <tr className="text-center"><td colSpan={4}>Cargando...</td></tr>}
                        {renderList()}
                    </MDBTableBody>
                </MDBTable>
                {/* modal component */}
                <ModalDetail 
                    modal={modal} 
                    toggleShow={toggleShow} 
                    detail={detail} 
                    buttons={switchBtn} 
                    from={from}
                />
            </>
}

export default WeatherList