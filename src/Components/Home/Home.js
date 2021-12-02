import React from 'react';
import './Home.css';
import Abir from '../../img/Abir.jpg'

const Home = () => {
    return (
        <div id='home' className='j'>
            <div className='j-left'>
                <div className='j-bg'></div>
            <img src={Abir} alt='' className='j-img'/>  
            </div>
            

            
            <div className='j-right'>
                
                <div className='j-right-wrapper'>
                    <h2 className='j-intro'> Hi, My name is</h2>
                    <h1 className='j-name'> Shaown Abir Khan</h1>
                    <div className='j-title'>
                        <div className='j-title-wrapper'>
                            <div className='j-title-item'>Web developer.</div>
                            <div className='j-title-item'>Web designer.</div>
                            <div className='j-title-item'>Front-End Web developer.</div>
                            <div className='j-title-item'>Mern Stack developer.</div>
                            <div className='j-title-item'>HTML, CSS,JAVASCRIPT expertise.</div>
                        </div>
                    </div>
                    <p className='j-desc'>
                        I am a web developer. I have done some projects.I know the basic and If I have the oppurtunity to work I will work hard.
                    </p>
                     
                </div>
               
            </div>
            
        </div>
    );
};

export default Home;