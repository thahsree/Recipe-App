import React from 'react';
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Suggestions from '../components/Suggestions';

function Hero(props) {
    return (
        <section className='flex flex-col' >
            <Navbar />
            <Content/>
            <Suggestions/>
        </section>
    );
}

export default Hero;