import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import my1 from '../image/my.jpg';
import my2 from '../image/my3.jpg';
import my3 from '../image/my1.jpg';
import "./Imagee.css";

function Imagee() {
  const [selectedImage, setSelectedImage] = useState(my1);
  
  const images = [my1, my2, my3];

  return (
   
    <div className="profile-container">
      {/* Main Image */}
      <div className="main-image-container">
        <Image 
          src={selectedImage} 
          alt="Portfolio" 
          className="main-image"
        />
      </div>

      {/* Image Navigation */}
      <div className="image-navigation">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`thumbnail-container ${img === selectedImage ? 'active' : ''}`}
            onClick={() => setSelectedImage(img)}
          >
            <Image 
              src={img} 
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imagee;