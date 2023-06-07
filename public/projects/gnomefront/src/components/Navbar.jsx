
import React, { useState } from 'react'

function Navbar() {
    return (
        <nav className='fixed top-0 z-10 flex items-center py-6 px-16 h-20 w-screen bg-white shadow-md'>
            <div className='flex-auto'>
                <img src="src\assets\gnomefront.png" alt="" className='w-24'/>
            </div>
            <div className='flex-auto'>
                <NavLink text="link1"/>
                <NavLink text="link2"/>
                <NavLink text="link3"/>
            </div>
            <Dropdown/>
            <div className='flex items-center'>
                <LogIn/>
                <SignUp/>
            </div>
        </nav>
    );
}

function NavLink({link, text}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <a href="" onClick={() => setIsOpen(!isOpen)} className='p-4 m-4 hover:bg-secondary rounded-2xl transition-all'>{text}</a>
            {isOpen && (
                <div className=''></div>
            )}
        </>
    );
}
/*
function NavButton({text}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className='p-4 hover:bg-secondary rounded-2xl transition-all'>{text}</button>
            {isOpen && (
                <div className='absolute top-6'>
                    <DropdownItem text="Gnomes" />
                    <DropdownItem text="Parts" />
                    <DropdownItem text="Accessories" />
                </div>
            )}
        </div>
    );
}
*/
function Dropdown() {
    return (
        <div className='group relative'>
            <button className='w-16 p-4 hover:bg-secondary rounded-2xl transition-all'>Link</button>
            <div className='invisible absolute flex flex-col w-16 bg-gray-100 text-gray-800 shadow-xl group-hover:visible'>
                <a className='py-2 text-gray-500 hover:text-black' href="">Link1</a>
                <a className='py-2 text-gray-500 hover:text-black' href="">Link2</a>
                <a className='py-2 text-gray-500 hover:text-black' href="">Link3</a>
            </div>
        </div>
    );
}

function DropdownItem({text, link}) {
    return (
        <div>
            <a href={link}>{text}</a>
        </div>
    );
}

function LogIn() {
    return (
        <button className='p-4 mx-1 border-2 text-secondary border-secondary rounded-2xl shadow hover:rounded-lg transition-all'>
            Log In
        </button>
    );
}

function SignUp() {
    return (
        <button className='p-4 mx-1 text-white bg-primary rounded-2xl shadow hover:rounded-lg transition-all'>
            Sign Up
        </button>
    );
}

export default Navbar;