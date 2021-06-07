import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import SHOP_DATA from '../../pages/shop/shop.data';
import './collection-overview.styles.scss'

const CollectionOverview = () => (
    <div className="collection-overview">
        {SHOP_DATA.map(collection => (
            <div key={collection.id}>
                {collection.title}
                <CollectionPreview items={collection.items} />
            </div>
        ))}
    </div>
);

export default CollectionOverview;