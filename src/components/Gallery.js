import Pagination from 'react-bootstrap/Pagination';

function Gallery({ items }) {
  return (
    <div>
      <Pagination>{items}</Pagination>
  </div>
  );
}
export default Gallery;

