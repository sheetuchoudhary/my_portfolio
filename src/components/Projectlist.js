import Projectcard from './Projectcard';
import Projects from './Projects';

function Projectlist() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 py-3">
      {Projects.map((Project, index) => (
        <Projectcard 
          key={index}
          title={Project.title}
          description={Project.description}
          details={Project.details}
          link={Project.link}
          borderColor={Project.borderColor}
          image={Project.image}
        />
      ))}
    </div>
  );
}
export default Projectlist;
