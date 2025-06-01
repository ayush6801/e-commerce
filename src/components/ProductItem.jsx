import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className='border-2 border-blue-50 p-3 m-2 w-54 rounded-2xl h- bg-blue-50'>
      <h3 className='font-bold text-xl'>{product.title}</h3>
      <p><span className='font-bold text-xl'>Price: </span><span className="text-green-600 font-bold mb-4">${product.price}</span></p><br/>
      <div>
      <Link to={`/product/${product.id}`} className='border-2 p-1 rounded-2xl border-blue-400 bg-blue-400 text-white'>Details</Link> <br/>
      <button onClick={() => dispatch(addToCart(product))} className='border-2 p-1 rounded-2xl border-green-400 bg-green-400 text-white mt-2'>Add to Cart</button>
      </div>
      
    </div>
  );
};

export default ProductItem;
