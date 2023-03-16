import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListProduct } from '../../app/product/productAction';
import ProductItem from '../../components/product/ProductItem';
import './home.scss';
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListProduct());
  }, [dispatch]);

  const { product } = useSelector((state) => state.product);
  return (
    <div className='home container-fluid container-fluid-md m-0 m-sm-0 m-md-auto m-lg-auto  p-0 container-md container-lg  h-100vh '>
      {/* <Slider /> */}
      {/* <Filter /> */}
      <Row>
        {product.map((item) => (
          <ProductItem data={item} key={item._id} />
        ))}
      </Row>
    </div>
  );
}

export default Home;
