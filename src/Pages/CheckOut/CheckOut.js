import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useData from '../../CustomHook/useData';
import Service from '../Home/Service/Service';


const CheckOut = () => {
    const [services] = useData();
    let { serviceId } = useParams();
    
    const itemsDetails = services?.find(item => item.id === +serviceId);
    console.log('itemsDetails', itemsDetails);

    return (
        <div className='container text-center'>
            <h2>Check Out:{serviceId}</h2>
            <h2 className='text-info text-center text-uppercase mt-5'>Our Services</h2>
            <div className='row'>
                {itemsDetails && <Service service={itemsDetails}></Service>}
            </div>
            
            <div className='text-center'>
                <Link to="/thankyou">
                    <Button variant='info' >Thank You</Button>
                </Link>
            </div>

        </div>
    );
};

export default CheckOut;