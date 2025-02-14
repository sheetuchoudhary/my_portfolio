import Card from 'react-bootstrap/Card';

function Plink({ link }) {
  return (
    <Card.Link href={link} target="_blank" rel="noopener noreferrer">
      More details
    </Card.Link>
  );
}

export default Plink;
