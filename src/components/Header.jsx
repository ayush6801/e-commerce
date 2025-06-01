import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/cartSlice';

function Header() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">
        <Link to="/">ShoppyGlobe</Link>
      </h1>
      <nav className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/cart" className="relative">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-xs rounded-full px-1.5 py-0.5">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
