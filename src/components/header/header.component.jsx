import { React } from 'react';

import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            LOGO
            {/* <Logo className="logo"></Logo> */}
        </Link>

        <div className="options">
            <Link to="/shop"> SHOP | </Link>
            <Link to="/checkout"> CHECK OUT | </Link>
            <Link to="/sign-in"> SIGN IN | </Link>
            <Link to="/sign-up"> SIGN UP </Link>
            <CartIcon />
        </div>
    </div>
);

export default Header;