import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


const Navs = () => {
  return (
    

      <Navbar bg="light" variant="light">
        <Container>
         <Link to ='/'><Navbar.Brand >Home</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Link to ='/about' className='nav-link'  >About</Link>
            <Link to ='/services' className='nav-link'  >Services</Link>
            <Link to ='/contacts' className='nav-link' >Contacts</Link>
          </Nav>
        </Container>
      </Navbar>
         

  )
}

export default Navs
