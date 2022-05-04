import React, { useState } from 'react';
import {
  Collapse,Navbar,NavbarToggler,
  NavbarBrand,Nav,NavItem,
  NavLink
} from 'reactstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import img from '../../Images/ecl.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import './navbar.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavbarBrand href="/" className="navbar-brand mr-auto"><img className="logo" src={img}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} style={{marginRight:'20px'}} >
          <MenuRoundedIcon style={{ color: "#001427" }} />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="justify-content-end ml-auto px-3">
            <NavItem>
              <NavLink onClick={() => scrollTo('#ourt')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Our Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#webd')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Web Development</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#busp')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Business Planning</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#corr')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Corporate Relations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#pubr')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Public Relations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#evem')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Event Management</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#mark')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Marketing Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#socm')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Social Media Management</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#vide')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Videography Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#desi')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Design Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#cont')} style={{borderBottom:'#001427',color: 'white' ,paddingLeft:'20px',cursor:'pointer'}}>Content Team</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;