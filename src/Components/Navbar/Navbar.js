import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-black"  aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-black" href="#about">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-black" href="#project">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-black" href="#contact">Contact Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-black" href="https://drive.google.com/file/d/1HgEd2dF7Ewi-8m7rtMNzmVFG2KTHfmd8/view?usp=sharing">My Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-black" href="https://www.linkedin.com/in/shaown-abir-khan/"><i class="fab fa-linkedin">My linkedIn</i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-black" href="https://github.com/Shaown29"><i class="fab fa-github">My Github</i></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;