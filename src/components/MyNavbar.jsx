import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { searchData } from '../store/usersSlice';
import logo  from '../image/Logo.png';
import { Image } from 'react-bootstrap';

function MyNavbar() {

  let [txt, setxt] = useState('')

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchData(txt))
  }, [txt])

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={`logo`} alt="" style={{ height: "40px" }} /> */}
          <Image src={logo} className='me-5 mt-1' style={{ height: "40px" }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="fs-6 mx-3 fw-bolder text-secondary text-decoration-none" to="/">ALL-POST</NavLink>
            <NavLink className="fs-6 mx-3 fw-bolder text-secondary text-decoration-none" to="/createpost">CREATE-POST</NavLink>
          </Nav>
        </Navbar.Collapse>
        <input
          type="text"
          name=""
          id=""
          className='form-control w-25'
          placeholder='Search Blog'
          value={txt}
          onChange={(e) => setxt(e.target.value)}
        />
      </Container>
    </Navbar>
  )
}

export default MyNavbar