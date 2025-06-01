import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex justify-center'>
        <div className='border-2 border-blue-100 bg-blue-100 rounded-2xl p-4 m-2 w-68'>
        <h4 className='font-bold text-3xl'>{item.title}</h4>
        <p><span className='font-bold text-2xl'>Price: </span><span className="text-green-600 font-bold mb-4">${item.price}</span></p>
        <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
            dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
            min="1"
        />
      <br/>
      <button className='border-2 p-1 rounded-2xl border-red-400 bg-red-400 text-white mt-2' onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
    </div>
  );
};

export default CartItem;
