import React from 'react';
import { Button } from 'react-bootstrap';
import product from '../../assets/images/iphone-14-pro-max-vang-thumb-600x600.webp';
import { fetchListCart } from '../../app/cart/cartAction';

import { useDispatch } from 'react-redux';
import cartApi from '../../apis/cartApi';
import { baseURL } from '../../apis';
function CartItem({ data }) {
  const dispatch = useDispatch();
  const handleRemove = async () => {
    await cartApi.remove({ _id: data._id });
    dispatch(fetchListCart());
  };
  return (
    <tr className='border vertical-center '>
      <td className='p-4'>
        <img
          src={baseURL + '/public/image/' + data?.product[0]?.picturePath}
          style={{
            width: '150px',
          }}
        />
      </td>
      <td>{data?.product[0]?.name}</td>
      <td>{data?.count}</td>
      <td>
        <strong>{data?.product[0]?.price * data?.count}$</strong>
      </td>
      <td>
        <div className='d-flex align-items-center  justify-content-around'>
          <Button variant='warning' onClick={() => handleRemove()}>
            {' '}
            Remove
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
