import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';

const ProductCar = () => {
    const [cars, setCars] = useState([])
    const lessItem = cars.slice(0, 6)
    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='bg-accent lg:flex-none  flex justify-center'>
            <div className='bg-accent '>
                <h1 className='text-center lg:text-4xl font-bold uppercase pt-5 text-white'>Products</h1>
                <div className='grid lg:grid-cols-3 gap-14 lg:m-8'>
                    {
                        lessItem.map(car => <Car key={car._id} car={car}></Car>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCar;