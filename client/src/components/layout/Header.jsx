import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/user/userAction';
import './header.scss';
function Header({ setAuth }) {
  const [keyword, setKeyWord] = useState('');

  const { isLogin, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setKeyWord(value);
  };

  const handleSearch = () => {
    if (keyword.trim().length > 0) navigate(`/product/search/${keyword}`);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className='bg-success header'>
      <div className='container '>
        <div className='d-flex justify-content-between align-items-center p-2 '>
          {/* ------------------------------Header right---------------------- */}
          <div className='d-flex align-items-center'>
            <h1 className='text-light'>
              <Link to='/'> Store</Link>
            </h1>
          </div>

          {/* ---------------------------Header Left-------------------  */}
          <div className='d-flex align-items-center gap-3'>
            <div className='box__search  bg-success'>
              <input
                type='text'
                className='border box__search__input m-2 px-2'
                placeholder='Search product'
                onChange={(e) => handleChange(e)}
              />
              <i
                className='fa fa-search'
                aria-hidden='true'
                onClick={() => handleSearch()}></i>
            </div>

            {isLogin ? (
              <div>
                <Link to={`/user/${user?._id}`}>
                  <i
                    className='fa fa-user account__icon'
                    aria-hidden='true'></i>
                </Link>
                <Link to='/manage'>
                  <i className='fa-solid fa-plus'></i>
                </Link>

                <Link to={`/cart/${user?._id}`}>
                  <i className='fa fa-cart-arrow-down' aria-hidden='true'></i>
                </Link>
                <strong
                  className='text-white mx-2'
                  onClick={() => handleLogout()}>
                  LOGOUT
                </strong>
              </div>
            ) : (
              <strong className='text-white' onClick={() => setAuth(true)}>
                LOGIN
              </strong>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
