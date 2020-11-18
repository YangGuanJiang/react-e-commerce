import './checkout.styles.scss';
import {connect} from "react-redux";
import { createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import React from "react";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";


const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
                <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
            ))}
        {cartItems.length ? <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>: null}
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);
