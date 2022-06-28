import React from 'react';

const Detail = ({ detail, setDetail }) => {
    // const { img, name, price, quantity, description, _id } = detail
    const increaseQuantity = () => {
        const xQuantity = detail.quantity
        const quantity = xQuantity + 1
        const updatedInfo = { quantity }
        fetch(`http://localhost:5000/update/${detail._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetail(data)
            })
    }
    const decreaseQuantity = () => {

        const xQuantity = detail.quantity;
        const quantity = xQuantity - 1;
        const updatedInfo = { quantity }
        const url = `http://localhost:5000/update/${detail._id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                setDetail(data)
            })
    }
    return (
        <div>
            <div class="bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-2  rounded-4xl">
                <figure><img className='lg:w-full' src={detail.img} alt="" /></figure>
                <div class="card-body lg:w-96">
                    <h2 class="card-title">{detail.name}</h2>
                    <p className=''>{detail.description}</p>
                    <p className='text-2xl mt-[-120px]'>{detail.quantity}</p>
                    <p className='text-4xl mt-[-120px]'>{detail.price}</p>
                    <div class=" flex justify-evenly mt-[-50px]">
                        <button onClick={increaseQuantity} class="btn btn-secondary">Quantity+</button>
                        <button onClick={decreaseQuantity} class="btn btn-primary">Quantity-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;