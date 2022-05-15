import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { _id, name, img, description, price,supplier,qty } = service;
    const navigate = useNavigate();
    const navigateCheckOut = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Price: ${price}</p>
                    
                    <p className="card-text">Supplier: {supplier}</p>
                    <p className="card-text">{qty}</p>
                    <Link to={`/service/${_id}`}>
                        <button onClick={() => navigateCheckOut(_id)} className="btn btn-info">Update</button>
                    </Link>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Service;