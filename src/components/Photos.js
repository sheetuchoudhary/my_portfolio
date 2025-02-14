import React from 'react';
import { Pagination } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Gallery from './Gallery';
import my1 from '../image/my.jpg';
import my2 from '../image/my3.jpg';
import my3 from '../image/my1.jpg';

let images = [my1, my2, my3];

function Photos({ setSelectedImage }) {
  let items = images.map((img, index) => (
    <Pagination.Item key={index} onClick={() => setSelectedImage(img)}>
      <Image 
        src={img} 
        alt={`Image ${index + 1}`} 
        width="50" 
        height="50" 
        roundedCircle
        className="me-2"
      />
      {index + 1}
    </Pagination.Item>
  ));

  return (
    <div>
      <Gallery items={items} />
    </div>
  );
}

export default Photos;
