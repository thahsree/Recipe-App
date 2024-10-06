import React from 'react';

function Nav(props) {
    return (
        <section className='flex max-sm:hidden flex-col p-5 gap-5 border-b border-b-slate-rgb(0,0,0)'>
            <div className='flex justify-between text-slate-gray pl-10 pr-10'>
                <ul className='flex justify-between gap-10'>
                    <li className='cursor-pointer hover:text-black'>English</li>
                    <li className='cursor-pointer hover:text-black'>Location</li>
                </ul>
                <ul className='flex gap-10'> 
                    <li className='cursor-pointer hover:text-black'>Tracking Package</li>
                    <li className='cursor-pointer hover:text-black'>FAQ</li>
                    <li className='cursor-pointer hover:text-black'>About Us</li>
                    <li className='cursor-pointer hover:text-black'>Contact Us</li>
                </ul>
            </div>
        </section>
    );
}

export default Nav;