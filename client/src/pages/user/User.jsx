import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import product from '../../assets/images/iphone-14-pro-max-vang-thumb-600x600.webp';
import UserForm from '../../components/user/UserForm';

function User() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className='container-fluid container-fluid-sm container-md container-lg h-100vh'>
      <Row>
        <Col xs={3} sm={4} md={4} lg={2}>
          <img
            className='circle'
            src={product}
            alt=''
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
            }}
          />
        </Col>
        <Col xs={9} sm={8} md={8} lg={10}>
          <div className='list__info'>
            <strong>UserID: </strong> {user._id}
          </div>
          <div className='list__info'>
            <strong>Display Name:</strong> {user.displayName}
          </div>
          <div className='list__info'>
            <strong>Address:</strong>
            {user.address}
          </div>
          <div className='list__info'>
            <strong>Phone:</strong>
            {user.phoneNumber}
          </div>
          <div className='list__info'>
            <strong>Admin:</strong>
            {user.isAdmin && <i className='fa fa-check' aria-hidden='true'></i>}
          </div>
        </Col>
      </Row>

      <UserForm user={user} />
    </div>
  );
}

export default User;
