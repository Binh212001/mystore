import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ProductForm from '../../components/manage/ProductForm';
import ProductFormUpdate from '../../components/manage/ProductFormUpdate';
import ProductTable from '../../components/manage/ProductTable';

function Manage() {
  const [showForm, setShowForm] = useState(false);
  const [showFormUpdate, setShowFormUpdate] = useState(false);

  const [keyword, setKeyWord] = useState('');
  const [productId, setProductId] = useState('');

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim().length > 0) console.log('Hello');
  };

  return (
    <div className='container-fluid container-fluid-sm container-md container-lg h-100vh'>
      <div className='d-flex justify-content-between my-4'>
        <Button onClick={() => setShowForm(true)}>
          <i className='fa fa-plus' aria-hidden='true'></i>
          ADD NEW PRODUCT
        </Button>

        <div className=''>
          <input
            type='text'
            className='border box__search__input px-2'
            placeholder='Search product'
            onChange={(e) => handleChange(e)}
          />
          <i
            className='fa fa-search mx-2'
            aria-hidden='true'
            onClick={() => handleSearch()}></i>
        </div>
      </div>
      <ProductTable
        setProductId={setProductId}
        setShowForm={setShowForm}
        setShowFormUpdate={setShowFormUpdate}
      />
      {showForm && <ProductForm setShowForm={setShowForm} />}
      {showFormUpdate && (
        <ProductFormUpdate
          setShowFormUpdate={setShowFormUpdate}
          productId={productId}
        />
      )}
    </div>
  );
}

export default Manage;
