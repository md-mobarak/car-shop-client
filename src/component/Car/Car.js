import React from 'react';
import { useNavigate } from 'react-router-dom';

const Car = ({ car }) => {
    const { img, _id, name, description, quantity, price } = car
    const navigate = useNavigate()
    const handleBuyNow = (id) => {
        navigate(`/carDetails/${id}`)
        console.log(id);
    }
    return (
        <div className=''>
            <div class="card card-compact lg:w-96  w-64 bg-base-100 shadow-xl">
                <figure><img src={img} className='lg:h-80 lg:w-96' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Car</h2>
                    <p>{description}</p>
                    <h1 className='text-4xl font-bold'>{price}</h1>
                    <div class="card-actions">
                        <button onClick={() => handleBuyNow(_id)} class="btn btn-primary w-full">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;