import React from 'react'
import Hero from './Hero'
import Slider from './Slider'
import WhyUs from './WhyUs'
import FAQ from './FAQ'

const Home = () => {
    return (
        <div className="dark:bg-gray-700 dark:text-white bg-white text-gray-900 pb-10 transition-colors duration-500">
            <Hero />
            <Slider />
            <WhyUs />
            <FAQ />
        </div>
    )
}

export default Home
