import React from 'react';
import { useParams } from 'react-router-dom';
import useDataDetails from '../../CustomHook/useDataDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'



const OrderItem = () => {
    const { serviceId } = useParams();
    const [service] = useDataDetails(serviceId);
    const [user] = useAuthState(auth);
    return (
        <div className='w-50 mx-auto'>
            <h2>Product Name: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" value={user.displayName} name="" placeholder="name" required disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="" placeholder="email" required disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="" placeholder="name" required />
                <br />
                <input className='w-100 mb-2' type="text" placeholder="description" required />
                <br />
                <input className='w-100 mb-2' type="number" name="" placeholder="price" required />
                <br />
                <input className='w-100 mb-2' type="number" name="" placeholder="qty" required />
                <br />
                <button className='btn btn-info'>Order</button>


            </form>



            {/* <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div> */}
        </div>
    );
};

export default OrderItem;
