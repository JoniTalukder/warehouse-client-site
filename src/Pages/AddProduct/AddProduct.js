import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://pure-ravine-17489.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    toast('Item Added');
                }

            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Add Product</h2>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' value={user.displayName} placeholder='Name' {...register("userName")} />
                <input className='mb-2' value={user.email} placeholder='email' {...register("email")} />
                <input className='mb-2' placeholder='PhotoURL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("qty")} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;