import useReviews from '../../hooks/useReviews'
import Product from '../Product/Product';
import './Reviews.css';

const Reviews = () => {
    const [products] = useReviews([]);

    return (
        <div>
            <h2 className='reviews-header'>All Reviews are here </h2>
            <div className="all-reviews">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Reviews;