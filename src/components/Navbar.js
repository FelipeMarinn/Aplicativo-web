import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const NavbarStyled = styled.div`
 
  padding: 10px 0;
  background-color: #f2f6fc;

  nav {
    width: 1000px;
    margin: 0 auto;
    height: 40px;
   
    .nav-item {
      color: black;
      text-align: center;
      padding: 0 15px;
      line-height: 40px;
      text-decoration: none;
      letter-spacing: 1px;
      &:hover {
          color: #0781b2;
      } 
    }
  }
  .bars {
      margin-left: 10px;
  }
  .bars, .close {
    display: none;  
    font-size: 20px;
  }

  @media screen and (max-width: 650px) {
      nav {
        position: fixed;
        top: -100%;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        background-color: white;
        color: black;
        z-index: 1000;
        opacity: 0.95;
        transition: 0.3s linear;
      }
    nav.toggle {
        top: 0;
    }

    .bars, .close {
        display: inline-block;  
    }
    .close{
        position: absolute;
        right: 50px;
        top: 30px;
    }
  }
`


export const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const menuToggle = () => {
        setToggle( !toggle )
    }

    return (
        <NavbarStyled>
            
            <div className='bars' onClick={ menuToggle }>
              <i className="fas fa-bars" ></i> 
            </div>
          
            <nav className={ toggle ? 'toggle' : '' }>
                
                <Link  to="/" className="nav-item" onClick={ menuToggle } >
                    Home
                </Link>
    
                <NavLink
                    activeClassName="active"
                    className="nav-item" 
                    exact
                    to="/usuarios"
                    onClick={ menuToggle }
                >
                    Usuarios
                </NavLink>       
                <NavLink 
                    activeClassName="active"
                    className="nav-item" 
                    exact
                    to="/albumes"
                    onClick={ menuToggle }
                >
                    Albumes
                </NavLink>       
                <NavLink 
                    activeClassName="active"
                    className="nav-item" 
                    exact
                    to="/publicaciones"
                    onClick={ menuToggle }
                >
                    publicaiones
                </NavLink>

                <div className='close'>
                  <i className="fas fa-times" onClick={ menuToggle }></i>    
                </div>
                
        </nav>
              
        </NavbarStyled>
    )
}
