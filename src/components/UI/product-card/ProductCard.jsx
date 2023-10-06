import React from 'react';

import '../../../styles/product-card.css';

import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';


const ProductCard = (props) => {

    const {id, title, image01, price}=props.item;
    const dispatch = useDispatch()

    const addToCart =() =>{
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }

  return (
    <div className='product__item'>
        <div className='product__img'>
            <img src={image01} alt="product-img" className='w-50 m-auto'/>
        </div>
    <div className="product__content">
        <h5>
            <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className='d-flex align-items-center justify-content-between'>
            <span className="product__price ">₹{price}</span>
            <Button className="addToCart__btn" onClick={addToCart}>Add to Cart</Button>
        </div>
    </div>


    </div>
  )
}

export default ProductCard