import React from "react";
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="font-small pt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Efrenhz
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;