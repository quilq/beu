import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss'

const CollectionPreview = ({ items }) => (
    <div className="collection-preview">
        {items.map(item => (
            <CollectionItem key={item.id} item={item} />
        ))}
    </div>
);

export default CollectionPreview;