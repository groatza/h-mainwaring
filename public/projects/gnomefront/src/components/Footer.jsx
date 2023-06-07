import React from 'react'

function Footer() {
    return (
        <div className='flex justify-between mt-40 p-32 w-screen text-white bg-primary'>
            <p>
                1304 Deepgrove Lane
                Hidden Forest
                <br />
                (289) 939-2403
                h.p.mainwaring@gnomail.com
            </p>
            <div>
                About
            </div>
            <div>
                Careers
            </div>
            <form>
                <label htmlFor="email">Newsletter</label>
                <input type="email" name="email" id="email" />
            </form>
        </div>
    );
}

export default Footer;