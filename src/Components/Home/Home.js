import React from 'react';
import './../NotFound/NotFound'
import gadgetImg from '../../Images/gadgetImg.jpg'
import './Home.css';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews'
import Product from '../Product/Product';


const Home = () => {
    const [products] = useReviews([]);
    return (
        <div className='home-body'>

            <div className="home-top">
                <div className="home-text">
                    <h1>Are you looking for awesome <span>Smart Gadgets...</span></h1>
                    <h3>Great !! you are in perfect place</h3>
                    <a className='button' href="*">Don't Click</a>
                </div>
                <div className="home-img">
                    <img src={gadgetImg} alt="" />
                </div>
            </div>
            <div className="home-reviews">
                <h2 className='reviews-header'>Reviews</h2>
                <div className="all-reviews">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>

                <Link to="/reviews"><button className='review-button'> All reviews</button></Link>

            </div>





        </div>
    );
};

export default Home;