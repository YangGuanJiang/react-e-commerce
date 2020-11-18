// import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo} from '../../assessts/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import './header.styles.scss';
import React from "react";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link to="/" className='logo-container'><Logo className='logo'/></Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='' className='option'>CONTACT</Link>
                {currentUser ?
                    (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                    : (<Link to='/sign' className='option'>SIGN IN</Link>)}
                    <CartIcon />
            </div>
            {hidden ? null : <CartDropdown/>}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
