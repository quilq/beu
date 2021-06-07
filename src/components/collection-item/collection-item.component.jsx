import { React } from 'react';
import { connect } from 'react-redux';

import PlaceholderImage from '../../assets/placeholder-image';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => (
    <div>
        <PlaceholderImage size={200} />
        <div>{item.id}</div>
        <button onClick={() => addItem(item)}>add {item.name} to cart</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);