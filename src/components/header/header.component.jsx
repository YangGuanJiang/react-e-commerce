import React from 'react';
import {Link} from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo} from '../../assessts/crown.svg'
import './header.styles.scss'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to="/" className='logo-container'><Logo className='logo' /></Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='' className='option'>CONTACT</Link>
            {currentUser?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :<Link to='/sign' className='option'>SIGN IN</Link>}
        </div>
    </div>
)
export default Header;
