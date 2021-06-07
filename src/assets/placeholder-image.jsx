import { React } from 'react';

const PlaceholderImage = ({size}) => {
    const imageUrl = `https://via.placeholder.com/${size}`
    return (
        <div>
            <img src={imageUrl} alt="item" />
        </div>)
};

export default PlaceholderImage;
