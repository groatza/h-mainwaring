import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
    const handleScroll = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <nav className='fixed top-0 z-10 flex justify-between items-center py-6 px-16 h-20 w-screen bg-white shadow-md'>
            <h2 className='font-bold'>Hugh Mainwaring</h2>
            <div className=''>
                <Link to='home' smooth={true}><a className='m-2 font-bold hover:text-red-500 transition-all' href="">Home</a></Link>
                <Link to='about' smooth={true}><a className='m-2 font-bold hover:text-red-500 transition-all' href="#about">About</a></Link>
                <Link to='projects' smooth={true}><a className='m-2 font-bold hover:text-red-500 transition-all' href="#projets">Projects</a></Link>
                <Link to='contact' smooth={true}><a className='m-2 font-bold hover:text-red-500 transition-all' href="">Contact</a></Link>
                {/*
                <a className='m-2 font-bold hover:text-red-800 transition-all' href="">Home</a>
                <a className='m-2 font-bold hover:text-red-800 transition-all' href="#about" onClick={handleScroll}>About</a>
                <a className='m-2 font-bold hover:text-red-800 transition-all' href="">Projects</a>
                <a className='m-2 font-bold hover:text-red-800 transition-all' href="">Contact</a>
                */}
            </div>
        </nav>
    );
}

export default Navbar;