import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { baseURL } from '../../apis';
import {
  fetchListProduct,
  removeProduct,
} from '../../app/product/productAction';

function ProductTable({ setProductId, setShowFormUpdate }) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchListProduct());
  }, [dispatch]);

  const handleDeleteProduct = (sku) => {
    dispatch(removeProduct({ sku }));
    dispatch(fetchListProduct());
  };
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Picture</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Sale</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {product.map((product) => (
          <tr key={product._id}>
            <td>{product.sku}</td>
            <td>
              <a href={`${baseURL}/public/image/${product.picturePath}`}>
                {product.picturePath}
              </a>
            </td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              {product.sale ? (
                <i className='fa fa-check' aria-hidden='true'></i>
              ) : (
                <i className='fa fa-xmark position-absolute'></i>
              )}
            </td>
            <td>
              <i
                className='fa fa-edit text-primary'
                aria-hidden='true'
                onClick={() => {
                  setProductId(product.sku);
                  setShowFormUpdate(true);
                }}></i>
              <i
                className='fa-solid fa-trash text-danger'
                onClick={() => handleDeleteProduct(product.sku)}></i>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductTable;
