import React, { useState } from 'react';
import './App.css';
import { Container } from './Components/Container';
import Leftimage from './Components/Leftimage';

function App() {
  const [sky, setSky] = useState("Clouds");

  return (
    <React.Fragment>
      <div className="container d-flex justify-content-center ">
        <div className="row w-100 flex-column-reverse flex-md-row">
          <div className="col-md-6 bg-dark text-primary">
            <Leftimage sky={sky} />
          </div>
          <div className="col-md-6 bg-dark text-light font-weight-bold">
            <div className='container'>
              <Container setSky={setSky} />
            </div>
          </div>
        </div>
      </div>

      <div className='container d-flex justify-content-center fs-4 text'>
        <a class="nav-link text-primary"  href="https://github.com/GlennDmello17/Weather_app">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a class="nav-link text-primary"  target="_blank" href="https://github.com/GlennDmello17">
          Glenn Dmello
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
