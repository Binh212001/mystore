import React, { useEffect, useState } from 'react';
import product from '../../assets/images/iphone-14-pro-max-vang-thumb-600x600.webp';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { productApi } from '../../apis/productApi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListProduct } from '../../app/product/productAction';
import ProductItem from '../../components/product/ProductItem';
import { fetchListCart, newCart } from '../../app/cart/cartAction';
import cartApi from '../../apis/cartApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from '../../apis';
function ProductSelected() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const [productSelected, setProductSelected] = useState({});

  const dispatch = useDispatch();
  const { user, isLogin } = useSelector((state) => state.user);

  const productRelative = useSelector((state) => state.product.product);

  useEffect(() => {
    const getProductSelected = async (id) => {
      const res = await productApi.single(id);
      setProductSelected(res);
    };
    getProductSelected(id);
  }, [id]);

  useEffect(() => {
    dispatch(fetchListProduct());
  }, [dispatch]);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const notify = () => toast('Please Login now !');
  const addToCart = async () => {
    if (isLogin) {
      await cartApi.create({
        product: productSelected._id,
        user: user._id,
        count: quantity,
      });

      dispatch(fetchListCart());
      navigate(`/cart/${user._id}`);
    } else {
      notify();
    }
  };
  return (
    <div className='container-fluid container-sm-fluid container-md container-lg h-100vh'>
      {/* -----------------------------Product Information---------------------------  */}
      <ToastContainer />
      <Row>
        <Col sm='12' xs='12' md='4' lg='4'>
          <img
            src={baseURL + '/public/image/' + productSelected.picturePath}
            alt='dd'
            width='100%'
          />
        </Col>
        <Col>
          {/* ---------------------------Product Name-------------------  */}
          <h3>{productSelected?.name}</h3>
          {/* ----------------------------Description----------------------- */}
          <p className='my-5'>{productSelected?.description}</p>
          <div className='text-danger'>
            <strong>Price:</strong> {productSelected?.price}$
          </div>
          <div className='my-5'>
            <span
              onClick={() => decrement()}
              className='bg-primary rounded p-2'
              style={{
                cursor: 'pointer',
              }}>
              -
            </span>
            <span>{quantity}</span>
            <span
              onClick={() => increment()}
              className='bg-primary rounded p-2 '
              style={{
                cursor: 'pointer',
              }}>
              +
            </span>
          </div>

          <div className='grid '>
            <Button onClick={() => addToCart()}> ADD TO CART</Button>
          </div>
        </Col>
      </Row>

      {/* ----------------------------------------End  Product Information------------------ */}

      <h3>Product Relative</h3>
      <Row>
        {productRelative.map((product) => {
          return <ProductItem data={product} key={product.sku} />;
        })}
      </Row>
    </div>
  );
}

export default ProductSelected;
