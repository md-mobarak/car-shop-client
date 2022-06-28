import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../Detail/Detail';

const CarDetails = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
            })
    }, [id, detail])
    return (
        <div>
            {<Detail detail={detail} setDetail={setDetail}></Detail>}
        </div>
    );
};

export default CarDetails;