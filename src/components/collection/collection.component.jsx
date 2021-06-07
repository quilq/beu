import { React } from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection.styles.scss';
import SHOP_DATA from '../../pages/shop/shop.data';

const Collection = ({ match }) => (
    <div className="collection">
        {SHOP_DATA
            .filter(collection => collection.routeName === match.params.collectionId)
            .map(collection => collection.items
                .map(item => <CollectionItem key={item.id} item={item} />)
            )
        }
    </div>
);

export default Collection;