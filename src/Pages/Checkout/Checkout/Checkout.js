import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Checkout = () => {
    const [user] = useAuthState(auth)
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name='name' value={user.displayName} placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" name='email' value={user.email} placeholder='Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name='service' placeholder='Service' value={service.name} required />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='Address' required autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='Phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;