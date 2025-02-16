import i1 from '../image/fan.jpg';
import i2 from '../image/abc.jpg';
import i3 from '../image/fire.jpg';
import i4 from '../image/hospital.jpg';

const Projects = [
  {
    title: "Temperature Based Fan Speed Controller",
    description: "Automatic fan speed control system based on ambient temperature.",
    details: "A smart controller that adjusts fan speed automatically according to room temperature, optimizing comfort and energy efficiency.",
    link: "-------------------",
    borderColor: "primary",
    image: i1  // Remove the curly braces
  },
  {
    title: "A to Z Digital Learning Gadget",
    description: "Interactive digital learning tool for comprehensive alphabet and number education.",
    details: "Features LED and switch matrices for interactive learning of alphabets, numbers, and basic digital literacy concepts.",
    link: "-------------------",
    borderColor: "success",
    image: i2  // Remove the curly braces
  },
  {
    title: "Automatic Fire Extinguisher",
    description: "Automated fire detection and suppression system.",
    details: "Smart system that detects fire hazards and automatically activates extinguishing mechanisms for enhanced safety.",
    link: "-------------------",
    borderColor: "danger",
    image: i3  // Remove the curly braces
  },
  {
    title: "Hospital Service Management",
    description: "Comprehensive hospital management system.",
    details: "Digital platform for streamlining hospital operations, patient records, appointments, and service delivery tracking.",
    link: "-------------------",
    borderColor: "info",
    image: i4  // Remove the curly braces
  }
];

export default Projects;