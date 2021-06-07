import React from 'react';

import { withRouter } from 'react-router-dom';

import PlaceholderImage from '../../assets/placeholder-image';
import './directory-menu-item.styles.scss';

const DirectoryMenuItem = ({ match, history, title, imageUrl, linkUrl }) => {
    return (
        <div className="directory-menu-item"
            onClick={() => { history.push(`${match.url}${linkUrl}`) }}>
            <PlaceholderImage size={300} />
            <span>{title.toUpperCase()}</span>
        </div>
    )
};

export default withRouter(DirectoryMenuItem);