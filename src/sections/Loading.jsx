import { motion } from 'framer-motion';
import React from 'react';

function Loading(props) {

    const varients = {
        initial: {
            y: 0,
            opacity: 1
        },
        animate: {
            rotate: 360,
            opacity: 1,
            transition: {
                duration: 3,
                staggerChildren:.5,
                repeat:Infinity,
                repeatType:"mirror",
            },
        }
    }

    return (
        <motion.section className='w-full min-h-screen flex justify-center items-center'>
            <h1 className='text-4xl flex justify-center items-center max-sm:text-2xl'> 
                <motion.span variants={varients} initial="initial" whileInView="animate" className='w-20 max-sm:w-10 h-20 max-sm:h-10 flex justify-center items-center rounded-full mr-2 max-sm:mr-1 base-color text-white p-3'>f</motion.span>
                    fashion
                        <span className='text-red-950 text-4xl max-sm:text-2xl'>.</span>
            </h1>
        </motion.section>
    );
}

export default Loading; 