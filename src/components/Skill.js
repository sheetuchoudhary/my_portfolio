import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import "./Skill.css";

const Skill = () => {
  const programmingSkills = [
    { name: "C++", progress: 75 },
    { name: "Python", progress: 70 },
    { name: "SQL", progress: 70 },
    { name: "C", progress:65}
  ];

  const softSkills = [
    "Leadership & Collaboration",
    "Effective Communication",
    "Problem-Solving",
    "Mentoring & Guidance",
    "Adaptability & Ethics"
  ];

  return (
    <div className="skill-section">
      <h3 className="section-title">Skills</h3>
      <div className="skill-container">
        <div className="skill-card">
          <div className="row">
            <div className="col-md-6">
              <h4 className="skill-category">Programming Skills</h4>
              <div className="skill-list">
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <p className="skill-name">{skill.name}</p>
                    <ProgressBar 
                      now={skill.progress} 
                      label={`${skill.progress}%`}
                      variant="info" 
                      animated
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <h4 className="skill-category">Soft Skills</h4>
              <div className="soft-skills-list">
                {softSkills.map((skill, index) => (
                  <div key={index} className="soft-skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;