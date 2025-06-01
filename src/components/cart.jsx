import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items); // ✅ fix

  return (
    <div className='flex justify-center w-screen'>
         <div className="p-4">
      <h2 className="text-5xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='text-3xl'>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      )}
    </div>
    </div>
   
  );
};

export default Cart;
