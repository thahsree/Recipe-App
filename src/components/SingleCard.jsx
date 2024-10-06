import React from 'react';

function SingleCard({backgroundImage , title , type}) {
    return (
        <div className={`rounded-3xl bg-slate-500 h-full flex pb-5 pr-5 justify-end items-end ${type === 'Suggestion' ? 'max-sm:w-full' : 'max-sm:w-[50%]'}`}  style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'

        }}>
            <h5 className='text-4xl font-bold text-white-400 max-sm:text-lg'>{title}</h5>
        </div>
    );
}

export default SingleCard;