import { type JSX } from 'react';
import './navbar.css';

const Navbar = (): JSX.Element => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className='navbar'>
            <div className='navbar-inner'>
                <div className='navbar-logo' onClick={() => scrollTo('home')}>
                    Vanessa
                </div>
                <ul className='navbar-links'>
                    <li><button onClick={() => scrollTo('home')}>Home</button></li>
                    <li><button onClick={() => scrollTo('about')}>About</button></li>
                    <li><button onClick={() => scrollTo('flies')}>Flies</button></li>
                    <li><button onClick={() => scrollTo('sketches')}>Sketches</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
