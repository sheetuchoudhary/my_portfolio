/*import Card from 'react-bootstrap/Card';
import Ptitle from './Ptitle';
import Ptext from './Ptext';
import Plink from './Plink';*/

const Projects = [
  {
    title: "Project A",
    description: "This is the first project.",
    details: "More details about Project A.",
    link: "https://example.com/projectA",
    borderColor: "primary",
  },
  {
    title: "Project B",
    description: "This is the second project.",
    details: "More details about Project B.",
    link: "https://example.com/projectB",
    borderColor: "success",
  },
  {
    title: "Project C",
    description: "This is the third project.",
    details: "More details about Project C.",
    link: "https://example.com/projectC",
    borderColor: "danger",
  },
];
export default Projects;

/*

function Project({ title, description, details, link, borderColor }) {
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

export default Project;*/
