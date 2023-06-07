import React from 'react'

/*
        <div className='board grid grid-cols-4'>
            {
                Array.from({ length: 64}, (_, i) =>
                    <div key={i} className='border-2 bg-green-500 h-10 w-10'>x</div>
                )
            }
        </div>
*/

function ChessApp() {
    return (
        <div>
            <div className='grid grid-cols-3'>
                <div>x</div>
                <div>x</div>
                <div>x</div>
                <div>x</div>
                <div>x</div>
                <div>x</div>
                <div>x</div>
                <div>x</div>
            </div>
        </div>
    );
}

export default ChessApp;