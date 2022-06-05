import React from ' react ';
import './Products.css';

const Product = (props) => {
    const { picture, price, name } = props.product;
    return (
        <div className='container'>
            <img src={picture} alt=" " />
            <h4 className='product-name'> Name:{name} </h4>
            <p className='price'> Price: ${price} </p>
        </div >
    );
};


export default Product;

