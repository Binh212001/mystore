import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import ProductItem from '../../components/product/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../../app/product/productAction';
function Search() {
  const { keyword } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProduct({ name: keyword }));
  }, [keyword]);

  const { product } = useSelector((state) => state.product);

  return (
    <div className='container-fluid container-fluid-sm container-md container-lg h-100vh'>
      <Row>
        {product.map((data) => (
          <ProductItem data={data} key={data._id} />
        ))}
      </Row>
    </div>
  );
}

export default Search;
