import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
//import Button from './components/Button';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Imagee from './components/Imagee';
import Projectlist from './components/Projectlist';
//import Photos from './components/Photos.js';
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="content">
          <section className="main-section">
            <div className="left-side">
              <Imagee />
            </div>

            <div className="right-side">
              <div className="route-content">
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skill" element={<Skill />} />
                  <Route path="/projectlist" element={<Projectlist />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </section>

        {/*  <Button />*/}
        </div>
        <div className="footer">
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

