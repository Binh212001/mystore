import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../app/user/userAction';

function UserForm({ user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { displayName, address, phone, isAdmin } = data;
    dispatch(
      updateUser({
        _id: user._id,
        displayName,
        address,
        phoneNumber: phone,
        isAdmin: Boolean(isAdmin),
      }),
    );
    reset();
  };
  return (
    <div className='my-3'>
      <h3 className='text-center bg-success text-white'>UPDATE</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ------------------------------DisplayName------------------  */}
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Display Name
          </label>

          <input
            {...register('displayName', {
              required: true,
              minLength: 2,
              trim: true,
            })}
            type='text'
            className='form-control'
          />
        </div>
        {/* ---------------------------------Address---------------------------  */}
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Address
          </label>
          <input
            {...register('address', {
              required: true,
              minLength: 2,
              trim: true,
            })}
            type='text'
            className='form-control'
          />
        </div>
        {/* ---------------------------------Phone---------------------------  */}
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Phone
          </label>
          <input
            {...register('phone', { required: true, minLength: 2, trim: true })}
            type='number'
            className='form-control'
          />
        </div>

        {/* ---------------------------------Admin---------------------------  */}

        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Admin:
          </label>
          <input
            {...register('isAdmin', { required: true })}
            name='isAdmin'
            type='radio'
            value={true}
          />
          <span>True</span>
          <input
            {...register('isAdmin', { required: true })}
            name='isAdmin'
            type='radio'
            value={false}
          />
          <span>False</span>
        </div>
        <Button type='submit' className='mx-3'>
          Save
        </Button>
        <Button variant='warning'>Cancel</Button>
      </form>
    </div>
  );
}

export default UserForm;
