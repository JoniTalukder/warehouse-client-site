import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../CustomHook/useData';

const ManageProducts = () => {
    const [services, setServices] = useData();

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure want to Delete?");
        if (proceed) {
            const url = `https://pure-ravine-17489.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }
    return (
        <div className='container'>
            <h2>Manage Products</h2>
            <div className='d-flex g-5'>
                {
                    services.map(service => <div key={service._id}>


                        <div className="card">
                            <img src={service.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{service.name}</p>
                                <p className="card-text">Price: ${service.price}</p>
                                <p className="card-text">Supplier: {service.supplier}</p>
                                <p className="card-text">{service.qty}</p>
                            </div>
                        </div>
                        <button className='btn btn-info' onClick={() => handleDelete(service._id)}>Delete</button>
                        <Link to={'/addProduct'}>
                            <button className='btn btn-primary'>Add New Item</button>
                        </Link>


                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;