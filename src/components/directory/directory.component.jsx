import { React } from 'react';

import DirectoryMenuItemComponent from '../directory-menu-item/directory-menu-item.component';
import directorySections from './directory-sections';
import './directory.styles.scss';

const Directory = () => {
    return (
        <div className="directory">
            {directorySections.map(({id, ...otherProps}) => (
                <DirectoryMenuItemComponent key={id} {...otherProps} />
            ))}
        </div>
    )
};

export default Directory;