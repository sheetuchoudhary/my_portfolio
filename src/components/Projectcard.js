import Card from 'react-bootstrap/Card';
import Ptitle from './Ptitle';
import Ptext from './Ptext';
import Plink from './Plink';

function Projectcard({ title, description, details, link, borderColor }) {
    return (
      <Card className={`border-${borderColor} m-3`} style={{ width: '18rem' }}>
        <Card.Body>
          <Ptitle title={title} />
          <Ptext text={description} />
          <Ptext text={details} />
          <Plink link={link} />
        </Card.Body>
      </Card>
    );
  }
  
  export default Projectcard;