import { React } from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../../components/collection/collection.component';
import './shop.styles.scss';

const ShopPage = ({match}) => (
    <div className="shoppage">
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={Collection}/>
    </div>
);

export default ShopPage;