import Projectcard from './Projectcard';
import Projects from './Projects';

function Projectlist() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {Projects.map((Project, index) => (
        <Projectcard 
          key={index}
          title={Project.title}
          description={Project.description}
          details={Project.details}
          link={Project.link}
          borderColor={Project.borderColor}
        />
      ))}
    </div>
  );
}

export default Projectlist;
