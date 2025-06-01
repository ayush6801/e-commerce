import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="border-2 p-6 rounded-lg shadow-lg max-w-md w-full bg-white">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="mb-2">{product.description}</p>
        <p className="text-green-600 font-bold mb-4">${product.price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="border-2 px-4 py-2 rounded-xl border-green-500 bg-green-500 text-white hover:bg-green-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
