import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './filter.scss';
function Filter() {
  return (
    <div className='filter text-white bg-success my-2'>
      <h4 className='text-bold text-center'>Filter </h4>
      <div className=' d-flex  justify-content-around'>
        {/* -------------------Category------------- */}
        <div className='d-flex align-items-center  my-2'>
          <Row>
            <Col>
              <span className='mx-2 '>Categories:</span>
            </Col>
            <Col>
              <select className='filter__select p-1' name='category' id=''>
                <option>All</option>
                <option>Electric</option>
                <option>Clothes</option>
                <option>Furniture</option>
              </select>
            </Col>
          </Row>
        </div>
        {/* ------------------------Price-------------------  */}
        <div className='d-flex align-items-center  my-2'>
          <Row>
            <Col>
              <span className='mx-2 '>Price: </span>
            </Col>
            <Col>
              <select className='filter__select p-1' name='price'>
                <option></option>
                <option> Increment</option>
                <option> Decrement</option>
              </select>
            </Col>
          </Row>
        </div>
        {/* -----------------------Sort----------------------- */}
        <div className='d-flex align-items-center  my-2'>
          <span className='mx-2'> Sort:</span>
          <select className='filter__select p-1' name='price' id=''>
            <option></option>

            <option>asc</option>
            <option> desc</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
