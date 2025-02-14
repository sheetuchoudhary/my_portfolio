import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Photos from './Photos';  // Import Photos.js
import my1 from '../image/my.jpg';
//import my2 from '../image/profile.jpg';
//import my3 from '../image/my.jpg';

function Imagee() {
  // State to store selected image
  const [selectedImage, setSelectedImage] = useState(my1);

  return (
    <Container>
      <h6>Welcome To My Portfolio</h6>
      <Row>
        <Col>
          {/* Enlarged Image */}
          <Image src={selectedImage} thumbnail style={{ width: '400px', height: '400px' }} />
        </Col>
      </Row>
      
      {/* Pass setSelectedImage to Photos */}
      <Photos setSelectedImage={setSelectedImage} />
    </Container>
  );
}

export default Imagee;
