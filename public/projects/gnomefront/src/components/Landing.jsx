import React from 'react'

function Landing() {
    return (
        <div className="flex relative justify-center items-start m-40">
            <div className='flex relative justify-center items-center w-3/5 shadow-xl'>
                <img src="src/assets/gnome.jpg" alt="" className="h-50 w-100%"/>
                <h1 className="absolute left-5 text-5xl leading-loose font-bold text-white">Find<br /><span className="text-primary">Your</span><br />Gnome</h1>
            </div>
            <div className='flex flex-col w-3/5 px-10'>
                <h1>hello</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='absolute bottom-0 text-center'>
                    <button className='m-2 p-3 text-white bg-primary rounded-md'>Find a Gnome</button>
                    <button className='m-2 p-3 text-white bg-secondary rounded-md'>I'm Feeling Lucky</button>
                </div>
            </div>
        </div>
    );
}

export default Landing;