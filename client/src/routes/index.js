import Cart from '../pages/cart/Cart';
import Home from '../pages/home/Home';
import ProductSelected from '../pages/product/ProductSelected';
import Search from '../pages/search/Search';
import path from './path';

const routes = [
  {
    path: path.home,
    element: <Home />,
  },
  {
    path: path.cart,
    element: <Cart />,
  },
  {
    path: path.search,
    element: <Search />,
  },
  {
    path: path.product,
    element: <ProductSelected />,
  },
];

export default routes;
