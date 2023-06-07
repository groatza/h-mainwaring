import React from 'react'
import Card from './Card';
import gnomes from '../assets/gnomes';

function Featured() {
    const gnomeCards = gnomes.map( ({name, price, image}) =>
        <Card name={name} price={price} image={image} />
    );

    return (
        <div className='mx-40'>
            <h1 className='mx-6'>Featured Gnomes</h1>
            <div className='grid grid-cols-4'>
                {gnomes.map(({name, price, image}) =>
                    <Card name={name} price={price} image={image} />
                )}
            </div>
        </div>
    );
}

export default Featured;