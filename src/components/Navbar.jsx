import React from 'react';
import Cart from '../../public/Cart.svg';
import Love from '../../public/Love.svg';
import User from '../../public/User.svg';
import Hamburger from './Hamburger';

function Navbar(props) {
    return (
        <div className='pt-5 pr-5 pl-0 pb-5 flex w-full gap-20 justify-between'>
            <div className='flex justify-between items-center gap-10 w-[70%]' >
                <h2 className='text-2xl font-bold text-nowrap max-sm:pl-5 max-sm:text-xl'>RECIPES</h2>
                <div className='p-1 w-full flex border border-slate-black rounded-2xl max-sm:hidden'>
                    <input type="text" placeholder='search here' className='w-full border-none focus:outline-none focus:border-none' />
                </div>
                <div className='max-sm:hidden'>
                    <h3 className='text-nowrap font-semibold cursor-pointer'>All Category</h3>
                </div>
                <h3 className='text-nowrap font-semibold cursor-pointer max-sm:hidden'>Gift Cards</h3>
                <h3 className='text-nowrap font-semibold cursor-pointer max-sm:hidden'>Special Event</h3>
            </div>

            <div className='flex gap-5 max-sm:hidden'>
                <div className='cursor-pointer'>
                    <img src={Love} alt="" height={25} width={25} />
                </div>
                <div className='cursor-pointer'>
                    <img src={User} alt="" height={25} width={25} />
                </div>
                <div className='cursor-pointer'>
                    <img src={Cart} alt="" height={25} width={25} />
                </div>
            </div>
            <div className='hidden max-sm:flex'>
                <Hamburger />
            </div>
        </div>
    );
}
export default Navbar;