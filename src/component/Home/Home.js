import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ProductCar from '../ProductCar/ProductCar';


const Home = () => {
    return (
        <div >
            <h1 className='text-center text-white font-bold lg:text-4xl bg-accent py-4 uppercase'>Branding Car Shop </h1>
            <Banner></Banner>
            <ProductCar></ProductCar>
            <Footer></Footer>
        </div>
    );
};

export default Home;