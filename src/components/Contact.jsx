import React from 'react'
import { Element } from 'react-scroll';
import { IconContext } from 'react-icons';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Contact() {
    return (
        <Element name="contact">
            <section className="flex flex-col gap-6 justify-center items-center h-[50vh] px-40 text-white fill-white bg-red-900">
                <h1>Contact Me!</h1>
                <div className='grid grid-cols-2 justify-items-center'>
                    <div className=''>
                        <ContactCard icon={<FaPhone size={"2.5em"} />} method="tel:+" link="(289)-939-2403" text="(289)-939-2403"/>
                        <ContactCard icon={<FaEnvelope size={"2.5em"} />} method="mailto:" link="h.p.mainwaring@gmail.com" text="h.p.mainwaring@gmail.com"/>
                    </div>
                    <div className='justify-self-end'>
                        <ContactCard icon={<FaLinkedin size={"2.5em"} />} method="" link="https://www.linkedin.com/in/hugh-mainwaring-98b350276/"/>
                        <ContactCard icon={<FaGithub size={"2.5em"} />} method="" link="https://github.com/groatza"/>
                    </div>
                </div>
            </section>
        </Element>
    );
}

//change so email/phone functionality
function ContactCard({icon, method, link, text}) {
    method = method + link;
    return (
        <a href={method} className='flex items-center gap-2 m-2 fill-white'>
            {icon}
            <h2>{text}</h2>
        </a>
    );
}
