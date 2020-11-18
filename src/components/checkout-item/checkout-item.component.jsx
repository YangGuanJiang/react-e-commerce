import React from 'react';
import {addCartItem, clearCartItem, removeCartItem} from "../../redux/cart/cart.action";

import './checkout-item.styles.scss';
import {connect} from "react-redux";

const CheckoutItemComponent = ({ cartItem, dispatch }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt='item' />
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => dispatch(removeCartItem(cartItem))}>&#10094;</div>
            <span className='value'>{cartItem.quantity}</span>
            <div className='arrow' onClick={() => dispatch(addCartItem(cartItem))}>&#10095;</div>
        </span>
        <span className='price'>{cartItem.price}</span>
        <div className='remove-button' onClick={() => dispatch(clearCartItem(cartItem))}>&#10005;</div>
    </div>
);

// const mapDispatchToProps = (dispatch) => ({
//     addCartItem: cartItem => dispatch(addCartItem(cartItem)),
//     removeCartItem: cartItem => dispatch(removeCartItem(cartItem)),
//     clearCartItem: cartItem => dispatch(clearCartItem(cartItem)),
// })

export default connect()(CheckoutItemComponent);
