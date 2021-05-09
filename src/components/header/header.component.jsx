import { React } from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link to="/shop">
            SHOP
        </Link>
        <Link to="/checkout">
            CHECK OUT
        </Link>
        <Link to="/sign-in">
            SIGN IN
        </Link>
        <Link to="/sign-up">
            SIGN UP
        </Link>
    </div>
);

export default Header;