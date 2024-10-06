import React from 'react';
import SingleCard from './SingleCard';

function Content(props) {

    const ArabicImage = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const ChineeseImage = 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    return (
        <div className="flex h-[calc(100vh-150px)] gap-5 max-sm:flex-col max-sm:justify-center max-sm:items-center p-0 max-sm:gap-2  max-sm:h-[90vh]" >
            <div className='flex w-[70%] h-full p-20 max-sm:p-5 rounded-3xl items-start 
            justify-start flex-col gap-10 max-sm:min-h-[70%] max-sm:w-[95%] max-sm:rounded-3xl
            max-sm:justify-center overflow-hidden
            ' style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'

                }}>
                <div className='w-[40%] h-[30%] flex flex-col gap-2 max-sm:w-[50%]'>
                    <h3 className='font-bold rounded-3xl bg-[#f8f7f791] text-[50px] text-[#211e1e] max-sm:text-[20px] max-sm:bg-inherit'>
                        Get Your Favorite Food Recipe Here !!
                    </h3>
                    <p className='text-black text-sm'>100+ varieties of food recipes over the world.</p>
                    <button className='bg-black hover:bg-[#000000b4] w-max text-white text-base rounded-2xl font-light' style={{ padding: '10px 15px' }}>View Recipes</button>
                </div>
            </div>
            <div className='flex flex-col max-sm:flex-row w-[30%] gap-5 h-full max-sm:w-full max-sm:pl-3 max-sm:pr-3  max-sm:justify-between max-sm:gap-2 overflow-auto'>
                {/* <div className='rounded-3xl bg-slate-500 h-full max-sm:w-[50%] flex pb-5 pr-5 justify-end items-end' style={{
                    backgroundImage: 'url("")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'

                }}>
                    <h5 className='text-4xl font-bold text-white-400 max-sm:text-lg'>Arabic</h5>
                </div> */}
                <SingleCard backgroundImage={ArabicImage} title="Arabic" type="Home"/>
                <SingleCard backgroundImage={ChineeseImage} title="Chineese" type="Home"/>
            </div>
        </div>
    );
}

export default Content;