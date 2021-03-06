import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const Rooms = () => {
    return (
        <Hero>
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">Home</Link>
            </Banner>
        </Hero>
    )
}

export default Rooms
