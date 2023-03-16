import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login, signUp } from '../../app/user/userAction';

function Auth({ isLogin, setAuth, setIsLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (isLogin) {
      dispatch(login(data));
    } else {
      const { email, password, confirmPassword } = data;
      if (password === confirmPassword) {
        dispatch(
          signUp({
            email,
            password,
          }),
        );
      }
    }
    reset();
    setAuth(false);
  };
  return (
    <div className='bg-light p-5 position-relative'>
      <h3 className='text-center'>{isLogin ? 'SIGN IN' : 'SIGN UP'}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ---------------------------------email---------------------------- */}
        <div>
          <label htmlFor='' className='form-label'>
            Email
          </label>
          <input
            type='email'
            {...register('email', {
              required: true,
            })}
            autoComplete='email'
            className='form-control'
            placeholder='email'
          />
        </div>
        <li
          className='text-danger errors mb-1s'
          style={{
            height: '10px',
            fontSize: '10px',
            width: '100%',
          }}>
          {errors.email && 'Email invalid'}
        </li>
        {/* ---------------------------------password---------------------------- */}
        <div className=''>
          <label htmlFor='' className='form-label'>
            Password
          </label>
          <input
            {...register('password', {
              minLength: 5,
            })}
            type='password'
            className='form-control'
            placeholder='password'
            autoComplete='password'
          />
          <li
            className='text-danger errors mb-1'
            style={{
              height: '10px',
              fontSize: '10px',
              width: '100%',
            }}>
            {errors.password && 'Password invalid'}
          </li>
        </div>

        {/* -------------------------------Confirm Password------------------------------  */}
        {!isLogin && (
          <div className=''>
            <label htmlFor='' className='form-label'>
              Confirm Password
            </label>
            <input
              {...register('confirmPassword', {
                minLength: 5,
              })}
              type='password'
              className='form-control'
              placeholder='Confirm password'
              autoComplete='confirmPassword'
            />
            <li
              className='text-danger '
              style={{
                height: '10px',
                fontSize: '10px',
                width: '100%',
              }}>
              {errors.confirmPassword && ' Confirm Password invalid'}
            </li>
          </div>
        )}
        <div className='d-grid'>
          {isLogin ? (
            <div className='d-grid'>
              <Button type='submit'>Sign In</Button>
              <Button
                onClick={() => setIsLogin(false)}
                className='my-2'
                variant='danger'>
                Sign Up
              </Button>
            </div>
          ) : (
            <div className='d-grid'>
              <Button variant='danger' type='submit'>
                Sign Up
              </Button>
              <Button onClick={() => setIsLogin(true)} className='my-2'>
                Sign In
              </Button>
            </div>
          )}
        </div>
      </form>
      <i
        className='fa fa-xmark position-absolute'
        onClick={() => setAuth(false)}
        style={{
          right: '2rem',
          top: '2rem',
          cursor: 'pointer',
        }}></i>
    </div>
  );
}

export default Auth;
