import React from 'react';
import PlaceholderImage from '../../assets/placeholder-image';

const CheckoutItem = ({ cartItem }) => (
    <div>
        <PlaceholderImage size={100} />
        <span>{cartItem.name}</span>
    </div>
);



export default CheckoutItem;