import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function OffcanvasExample() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  const getLinkStyle = (link) => ({
    color: hoveredLink === link ? 'rgb(113,176,246)' : 'white',cursor: 'pointer',});

  return (
    <>
      {['xl'].map((expand) => (

        <Navbar style={{ backgroundColor: "rgb(1, 2, 19)" }} key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" style={{ color: "white" }}>Mart</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ backgroundColor: "white", borderColor: "white" }} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end"
         style={{ backgroundColor: "black", color: "white" }}>

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: "white" }}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Nav.Link title="Dashboard" href="#action1" style={getLinkStyle('Dashboard')} onMouseEnter={() => handleMouseEnter('Dashboard')} onMouseLeave={handleMouseLeave}>Home</Nav.Link>
                  <Nav.Link title="Cart" href="#action1" style={getLinkStyle('Cart')} onMouseEnter={() => handleMouseEnter('Cart')} onMouseLeave={handleMouseLeave}>Cart</Nav.Link>
                  <Nav.Link title="About" href="#action1" style={getLinkStyle('About')} onMouseEnter={() => handleMouseEnter('About')} onMouseLeave={handleMouseLeave}>About</Nav.Link>
                  <Nav.Link title="Help" href="#action1" style={getLinkStyle('Help')} onMouseEnter={() => handleMouseEnter('Help')} onMouseLeave={handleMouseLeave}>Help</Nav.Link>

                  <NavDropdown title={<span style={{ color: "white" }}><AccountBoxOutlinedIcon/></span>} id={`offcanvasNavbarDropdown-expand-${expand}`} menuVariant="dark">

                    <NavDropdown.Item href="#action3"><PermIdentityOutlinedIcon />Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4"><ShoppingCartOutlinedIcon />Cart</NavDropdown.Item>
                    <NavDropdown.Item href="#action5"><VolunteerActivismOutlinedIcon />WishList</NavDropdown.Item>
                    <NavDropdown.Item href="#action6"><NotificationsNoneOutlinedIcon />Notification</NavDropdown.Item>
                    <NavDropdown.Item href="#action6"><AccountBalanceWalletOutlinedIcon />Payment Option</NavDropdown.Item>
                    

                  </NavDropdown>

                </Nav>

                <Form className="d-flex">

                  <Form.Control type="search" placeholder="Search" className="me-2"aria-label="Search" style={{backgroundColor:"#babdbf",borderColor:"black"}}/>

                  <Button variant="outline-secondary">Search</Button>

                </Form>

              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
