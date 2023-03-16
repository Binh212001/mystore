import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider from '../../assets/images/iphone-14-pro-max-vang-thumb-600x600.webp';
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={slider} alt='First slide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
