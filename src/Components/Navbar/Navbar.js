import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-black"  aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-black" href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-black" href="#blog">My Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-black" href="#project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-black" href="#contact">Contact Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-black" href="https://drive.google.com/file/d/1HgEd2dF7Ewi-8m7rtMNzmVFG2KTHfmd8/view?usp=sharing">My Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-black" href="https://www.linkedin.com/in/shaown-abir-khan/"><i className="fab fa-linkedin">My linkedIn</i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-black" href="https://github.com/Shaown29"><i className="fab fa-github">My Github</i></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;