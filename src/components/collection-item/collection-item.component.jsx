import React from 'react';
import {connect} from 'react-redux';

import CustomButton from "../custom-button/custom-button.compoent";
import {addCartItem} from "../../redux/cart/cart.action";

import './collection-item.styles.scss';

const CollectionItem = ({item, addCartItem}) => {
    const  {name, price, imageUrl} = item;
    return (<div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addCartItem(item)}> ADD TO CART </CustomButton>
        </div>)
}
const mapDispatchToProps = (dispatch) => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
