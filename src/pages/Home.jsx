import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div className="dark:bg-gray-700 dark:text-white bg-white text-gray-900 pb-10 transition-colors duration-500">
            <Hero />
            <Slider />
        </div>
    )
}

export default Home
