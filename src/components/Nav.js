import React, {useState} from 'react';
import { Link}  from 'react-router-dom'
import {
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavbarItem, 
    MDBNavbarToggler, 
    MDBCollapse,
    MDBContainer,
    MDBIcon
    } from "mdb-react-ui-kit";
import Logo from '../img/logo.svg'


const Nav = () => {
    //state menu bar
    const [open, setOpen] = useState(false)
    
    //action menu bar mobile
    const handleOpen = e => {
        let status = !open
        setOpen(status)
    }
    return (
        <MDBNavbar expand='md' dark bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand >
                    <Link to="/">
                        <img
                        src={Logo}
                        height='50'
                        alt=''
                        loading='lazy'
                        />
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarRightAlignExample'
                    aria-controls='navbarRightAlignExample'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={handleOpen}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={open}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <Link className="nav-link"  to="/">Inicio</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className="nav-link" to="weather" >Clima</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className="nav-link" to="favorites">Favoritos</Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}
  




export default Nav