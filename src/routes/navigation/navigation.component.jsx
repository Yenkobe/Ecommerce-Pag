import { Fragment } from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as MainLogo } from '../../assets/Logo.svg';

import './navigation.styles.scss';

const Navegation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                <MainLogo className="logo" />
                </Link>
            
                <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>
                 SHOP
                </Link>
                <Link className='nav-link' to='/auth'>
                 SIGN IN
                </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};
  
export default Navegation;
