import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Import
import "./Skill.css"; // Custom Styling

export default class Skill extends Component {
  render() {
    return (
      <div>
        <h3 className="text-dark">Skills</h3>
      <div className="skill-container">
      
        <div className="card shadow-lg p-4">
          

          <div className="row mt-3">
            {/* Left Side: Programming Skills */}
            <div className="col-md-6">
              <h4 className="text-dark">Programming Skills</h4>
              <ul className="list-group">
                <li className="list-group-item">C++</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">SQL</li>
              </ul>
            </div>

            {/* Right Side: Soft Skills */}
            <div className="col-md-6">
              <h4 className="text-dark">Soft Skills</h4>
              <ul className="list-group">
                <li className="list-group-item">Leadership & Collaboration</li>
                <li className="list-group-item">Effective Communication</li>
                <li className="list-group-item">Problem-Solving</li>
                <li className="list-group-item">Mentoring & Guidance</li>
                <li className="list-group-item">Adaptability & Ethics</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      </div>
    );
  }
}
