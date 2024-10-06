import React from 'react';
import SingleCard from './SingleCard';

function Suggestions(props) {
    let NorthIndian = 'https://images.pexels.com/photos/9609860/pexels-photo-9609860.jpeg?auto=compress&cs=tinysrgb&w=600';
    let SouthIndian = 'https://images.pexels.com/photos/20422133/pexels-photo-20422133/free-photo-of-triangular-bread-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600'
    return (
        <div className='mt-5 flex h-[50vh] gap-5 max-sm:flex-col max-sm:items-center max-sm:gap-5 max-sm:h-auto'>
            <div className='rounded-3xl w-[40%] h-full flex flex-col text-justify items-center flex-5 p-5 gap-2 max-sm:w-full max-sm:pl-5 max-sm:pr-5 '>
                <h3 className='text-[40px] font-bold w-full text-nowrap'>Indian <br className='max-sm:hidden' />Cuisines</h3>
                <p className='text-[14px]'>
                    Some popular types of Indian cuisine include North Indian, South Indian, East Indian, and West Indian. North Indian cuisine features dishes
                    such as tandoori chicken, butter chicken, and palak paneer, while South Indian cuisine is known for its use of rice, lentils, and coconut
                    in dishes like dosa and sambar
                </p>
                <button className='bg-black hover:bg-[#000000b4] w-max text-white text-base rounded-2xl font-light max-sm:mt-5' style={{ padding: '10px 15px' }}>Browse Recipes</button>
            </div>
            <div className='max-sm:flex flex-2 w-full max-sm:h-[200px] max-sm:items-center justify-center max-sm:pl-5 max-sm:pr-5'>
                <SingleCard backgroundImage={NorthIndian} title="North Indian" type='Suggestion'/>
            </div>
            <div className='max-sm:flex flex-2 w-full max-sm:h-[200px] max-sm:items-center justify-center max-sm:pl-5 max-sm:pr-5'>

                <SingleCard backgroundImage={SouthIndian} title="South Indian" type="Suggestion" />
            </div>
        </div>
    );
}

export default Suggestions;