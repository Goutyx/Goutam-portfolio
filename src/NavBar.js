import { useState } from 'react';
import './App.css';
import './Components.css';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className="Head">
                <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HOME</a>
                <a href="#About">ABOUT</a>
                <a href="#Education">EDUCATION</a>
                <a href="#Skills">SKILLS</a>
                <a href="#Certification">CERTIFICATIONS</a>
                <a href="#Projects">PROJECTS</a>
                <a href="#Contact">CONTACTS</a>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <a href="#" onClick={closeMenu}>HOME</a>
                <a href="#About" onClick={closeMenu}>ABOUT</a>
                <a href="#Education" onClick={closeMenu}>EDUCATION</a>
                <a href="#Skills" onClick={closeMenu}>SKILLS</a>
                <a href="#Certification" onClick={closeMenu}>CERTIFICATIONS</a>
                <a href="#Projects" onClick={closeMenu}>PROJECTS</a>
                <a href="#Contact" onClick={closeMenu}>CONTACTS</a>
            </div>
        </>
    );
}

export default NavBar;
