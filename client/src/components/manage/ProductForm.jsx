import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiConfig from '../../apis';
import {
  createProduct,
  fetchListProduct,
} from '../../app/product/productAction';

function ProductForm({ setShowForm }) {
  const { register, handleSubmit, reset } = useForm();

  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    const { name, description, quantity, price } = data;

    if (image) {
      const formData = new FormData();
      const fileName = Date.now() + image.name;
      formData.append('name', fileName);
      formData.append('picture', image);

      dispatch(
        createProduct({
          sku: parseInt(Math.random() * 1000000000),
          name,
          description,
          quantity: Number(quantity),
          price: Number(price),
          picturePath: fileName,
        }),
      );
      apiConfig.post('/upload/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      reset();
      setShowForm(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='position-fixed bg-light border p-5'
      style={{
        zIndex: 1000,
        top: '50%',
        width: '500px',
        left: ' 50%',
        transform: 'translate(-50% , -50%)',
      }}>
      <h3 className='text-center'>ADD NEW PRODUCT</h3>

      {/* --------------------------Name--------------------- */}
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Product Name
        </label>
        <input
          {...register('name', { required: true })}
          type='text'
          className='form-control'
          placeholder='Product Name'
        />
      </div>

      {/* --------------------------Description--------------------- */}
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Description
        </label>
        <textarea
          {...register('description', { required: true })}
          type='text'
          className='form-control'
          placeholder='Product Name'
        />
      </div>
      {/* ----------------------------Price-----------------------  */}
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Price
        </label>
        <input
          {...register('price', { required: true })}
          type='number'
          className='form-control'
          placeholder='Price'
        />
      </div>
      {/* -----------------------------Quantity----------------------  */}
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Quantity
        </label>
        <input
          {...register('quantity', { required: true })}
          type='number'
          className='form-control'
          placeholder='quantity'
        />
      </div>

      {/* -------------------------------Sale-----------------------------  */}

      <div className='mb-3'>
        <label htmlFor='' className='form-label '>
          Picture
        </label>
        <input
          type='file'
          className='form-control'
          onChange={(e) => handleChangeImage(e)}
        />
      </div>

      <div className='d-grid'>
        <Button type='submit'>Save</Button>
      </div>

      <i
        onClick={() => {
          setShowForm(false);
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

export default ProductForm;
