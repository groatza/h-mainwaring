import React from 'react'
import { Element } from 'react-scroll';

function About() {
    return (
        <Element name="about">
            <section id='about' className="flex flex-col justify-center h-screen bg-bg2">
                <div className='flex px-40 items-start'>
                    <div className='flex justify-center w-1/2'>
                        <img src="/qcomputing_upscale.png" alt="Queen's Computing Logo" className='h-96'/>
                    </div>
                    <div className='flex flex-col gap-6 w-1/2 pr-20'>
                        <h1>About Me</h1>
                        <p>
                            An outgoing and ambitious soon to be Queen's alumni, with an eye for design and the technical
                            background to see it realized in browser. I have robust skills in HTML, CSS, JavaScript, and Python. Currently I'm mastering React and Tailwind. I also have experience with PHP, Node.js, SQL, as well as
                            Adobe Illustrator, Photoshop and Premiere.
                        </p>
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default About;