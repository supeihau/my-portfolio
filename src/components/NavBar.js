import React from 'react';
import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Envelope } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setscrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setscrolled(true);
            } else {
                setscrolled(false);
            }
        }
        //當頁面開始捲動的時候呼叫onScroll函式
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onscroll);
    },[]);

    const onUpdateActveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" 
            className={scrolled ? "scrolled" : "" } //(condition) ? statment1 : statement2
        >
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{paddingLeft: '0px'}}
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} //點按後的css active
                            onClick={() => onUpdateActveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" 
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" 
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#contact" 
                            className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActveLink('contacts')}>Contacts</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="selina240@gmail.com" target="_blank">
                                <Envelope color="#6F6C3E" size={20}/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100003076170986" target="_blank">
                                <Facebook color="#6F6C3E" size={20}/>
                            </a>
                            <a href="https://github.com/supeihau" target="_blank">
                                <Github color="#6F6C3E" size={20}/>
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar