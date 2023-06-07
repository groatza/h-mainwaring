import React from 'react'
import { Element } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
    return (
        <Element name="projects">
            <section className='flex flex-col gap-6 justify-center px-40 h-screen'>
                <h1>Projects</h1>
                <div className='grid grid-cols-3 gap-10'>
                    <ProjectCard image="/gnomefront.png" title="Online Storefront" desc="WIP. Dummy site. Made with React and Tailwind" link="projects\gnomefront\src\App.jsx" github="https://github.com/hmainwaring/Gnomefront"/>
                    <ProjectCard image="/chess.PNG" title="Chess" desc="Just a simple chess engine as a proof of concept. Next step is to rebuild with a framewrok and add proper icons and animations" link="projects\chess\index.html" github="https://github.com/hmainwaring/Chess-Prototype"/>
                    <ProjectCard image="/localhost_5174_A5_index.html.png" title="Recipe Site" desc="This was made for my web dev intro course. Uses jQuery and PHP." link="projects\A5\index.html" github="https://github.com/hmainwaring/CISC-282"/>
                </div>
            </section>
        </Element>
    );
}

function ProjectCard({image, title, desc, link, github}) {
    return (
        <a href={link}>
            <div className='card relative group flex border-2 border-black bg-white shadow-xl cursor-pointer hover:shadow-2xl transition-all '> {/*want it to be flush against the container ^ but have margin between cards*/}
                <div className='overflow-hidden'>
                    <img src={image} alt="" className='w-[200px] group-hover:scale-105 transition-all'/>
                </div>
                <div className='px-4 pt-1 w-1/2'>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='text-sm'>{desc}</p>
                </div>
                <a href={github} className='absolute bottom-0 right-0 p-2 hover:text-green-500 transition-all ease-in-out'><FaGithub size={"2rem"} /></a>
                <div className='bg-gradient-to-b from-transparent via-white to-transparent
                                h-20 w-[2px] absolute -right-[2px] top-[60%] opacity-0
                                ease-out duration-300
                                group-hover:top-0 group-hover:opacity-100
                                z-1'>
                </div>
            </div>
        </a>
    );
}