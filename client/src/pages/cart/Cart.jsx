import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchListCart } from '../../app/cart/cartAction';
import CartItem from '../../components/cart/CartItem';

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const { isLogin } = useSelector((state) => state.user);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListCart({ userId: id }));
  }, [dispatch, id]);

  if (!isLogin)
    return (
      <div className='container p-0'>
        <h1>Please Login</h1>
      </div>
    );
  return (
    <div className='container p-0 h-100vh'>
      <h2 className='text-center text-success'>CART</h2>
      <Table responsive bordered>
        <thead className='bg-dark text-white'>
          <tr className='text-center'>
            <th>Picture</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {cart.map((data) => (
            <CartItem key={data._id} data={data} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
