import React from 'react';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.compoent";
import CartItem from '../cart-item/cart-item.component'

import './cat-dropdown.styles.scss';
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.action";

const CartDropdown  = ({toggleCartHidden, cartItems}) => {
    const history = useHistory();

    const handleClick = () => {
        toggleCartHidden();
        history.push("/checkout");
    }

    return (<div className='cart-dropdown'>
        <div className='cart-items'>
            {  cartItems.length ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                : (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>)
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
})
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
