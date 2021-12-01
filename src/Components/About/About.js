import React from 'react';
import './About.css';
import shaown from '../../img/shaown.png'

const About = () => {
    return (
        <div  id='about' className='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src={shaown} alt="" className='a-img'  />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    I have been studing CSE engineering in Southwest Forestry University and I love web development.
                </p>
                <p className='a-desc'>
                 I am comfortable using HTML, CSS, JavaScript, ReactJs, NodeJS, MongoDB, ExpressJs, Bootstrap, Tailwind CSS.
                 I am also familiar with Material UI, JWT, TypeScript, Rest API.
                The tools that I have been used are Git, GitHub, Npm, Yarn, VS Code, Chrome Dev Tool, Netlify, Firebase, Heroku, Windows.
                </p>
            </div>
            
        </div>
    );
};

export default About;