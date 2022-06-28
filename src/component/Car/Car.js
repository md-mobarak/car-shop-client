import React from 'react';

const Car = ({ car }) => {
    const { img, id, name, description, quantity } = car
    return (
        <div className=''>
            <div class="card card-compact lg:w-96  w-64 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;