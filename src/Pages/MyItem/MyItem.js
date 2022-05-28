import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [item, setItem] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/service?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [user]);
    return (
        <div>
            <h2>My Item List:{item.length}</h2>
            <div className='container d-flex gap-5 '>
                {
                    item?.map(item =>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                   Quantity: {item.qty}
                                </Card.Text>
                                <Card.Text>
                                   Price: ${item.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>

        </div>
    );
};

export default MyItem;