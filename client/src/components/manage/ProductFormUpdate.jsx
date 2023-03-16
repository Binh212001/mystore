import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { productApi } from '../../apis/productApi';
import { fetchListProduct } from '../../app/product/productAction';

function ProductFormUpdate({ setShowFormUpdate, productId }) {
  const [product, setProduct] = useState({
    sku: '',
    name: '',
    description: '',
    price: 0,
    quantity: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await productApi.update(product);
    if (res) {
      dispatch(fetchListProduct());
      setShowFormUpdate(false);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async (id) => {
      const res = await productApi.single(id);
      setProduct(res);
    };

    getProduct(productId);
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='position-fixed bg-light border p-5'
      style={{
        zIndex: 1000,
        top: '50%',
        width: '500px',
        left: ' 50%',
        transform: 'translate(-50% , -50%)',
      }}>
      <h3 className='text-center'>UPDATE PRODUCT</h3>
      {/* ----------------------ID----------------------- */}
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          ID
        </label>
        <input
          name='sku'
          type='text'
          className='form-control'
          placeholder='ID'
          value={productId}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* --------------------------Name--------------------- */}
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Product Name
        </label>
        <input
          name='name'
          type='text'
          className='form-control'
          placeholder='Product Name'
          value={product.name}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* --------------------------Description--------------------- */}
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Description
        </label>
        <textarea
          name='description'
          type='text'
          className='form-control'
          placeholder='Product Name'
          value={product.description}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {/* ----------------------------Price-----------------------  */}
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Price
        </label>
        <input
          name='price'
          type='number'
          className='form-control'
          placeholder='Price'
          value={product.price}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {/* -----------------------------Quantity----------------------  */}
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Quantity
        </label>
        <input
          name='quantity'
          type='number'
          className='form-control'
          placeholder='quantity'
          value={product.quantity}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className='d-grid'>
        <Button type='submit'>Save</Button>
      </div>

      <i
        onClick={() => {
          setShowFormUpdate(false);
        }}
        className='fa fa-xmark position-absolute'
        style={{
          right: '2rem',
          top: '2rem',
          cursor: 'pointer',
        }}></i>
    </form>
  );
}

export default ProductFormUpdate;
