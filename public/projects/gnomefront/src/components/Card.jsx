import React from 'react'

function Card({name, price, image}) {
    return (
        <div className='m-6 rounded-2xl border-2 border-primary shadow hover:rounded-lg transform hover:-translate-y-2 transition-all'>
            <img className='rounded-t-2xl hover:rounded-t-lg transition-all' src={image} alt="" />
            <div className='flex justify-between m-2'>
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
        </div>
    );
}

export default Card;   