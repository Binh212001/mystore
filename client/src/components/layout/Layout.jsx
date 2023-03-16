import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Auth from '../auth/Auth';

function Layout({ children }) {
  const [isLogin, setIsLogin] = useState(true);
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Header setAuth={setAuth} />
      <div>
        <div className=''>{children}</div>
        <div
          className='position-fixed '
          style={{
            top: '50%',
            left: '50%',

            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}>
          {auth && (
            <Auth isLogin={isLogin} setAuth={setAuth} setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
