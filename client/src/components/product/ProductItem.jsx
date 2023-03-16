import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { baseURL } from '../../apis';
import product from '../../assets/images/iphone-14-pro-max-vang-thumb-600x600.webp';
import './productItem.scss';

function ProductItem({ data }) {
  return (
    <Col xs={6} sm={4} md={3} lg={3} className='my-2'>
      <Link to={`/product/${data.sku}`}>
        <div className='pro__item border '>
          <img
            src={baseURL + '/public/image/' + data.picturePath}
            alt=''
            width='100%'
          />
          <p className='product__name m-0 p-0'>{data.name}</p>
          <div className='pro__item__price text-danger '>
            {data.price}
            <small>$</small>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default ProductItem;
