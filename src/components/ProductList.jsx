import useFetchProducts from '../hooks/fetchProducts';
import ProductItem from './ProductItem';
import { useState } from 'react';

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <p>Error fetching products</p>;

  return (
    <div>
        <div className='flex justify-center'>
         <input className='border-2 rounded-2xl p-3 m-2 w-3/4 '
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
         />
        </div>
     
      <div className='flex flex-wrap '>
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
