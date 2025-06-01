import { lazy } from 'react';
import App from './App';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/cart'));
const NotFound = lazy(() => import('./components/NotFound'));

export const routes = [
  {
    path: '/',
    element: <App />, 
    children: [
      { index: true, element: <ProductList /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'cart', element: <Cart /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
