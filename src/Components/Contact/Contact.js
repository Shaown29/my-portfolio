import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [good,setGood] = useState(false);

    const handleSubmit= e =>{
        e.preventDefault();
        emailjs.sendForm('service_fmb51rd', 'template_rljekox', formRef.current, 'user_COjS1bmbvXaIpV6ZzL6F2')
        .then((result) => {
            console.log(result.text);
            setGood(true);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div id='contact' className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'> Please send you valueable message</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                        <i  className="fas fa-phone-square-alt 'c-icon'">+88-01311449827</i>
                        </div>
                        <div className='c-info-item'>
                        <i  className="fas fa-address-card 'c-icon'">Tongi,Gazipur,Dhaka,Bangladesh</i>
                        </div>
                        <div className='c-info-item'>
                        <i className="fas fa-at 'c-icon'">shaownabirkhan@outlook.com</i>
                        </div>

                    </div>
                </div>
                <div className='c-right'>
                    <p className="c-desc">
                        <b>Do you have any question or want to give review or message or anything you want?</b>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name" /><br/>
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <br/>
                        <input type="text" placeholder='Email' name="user_email" />
                        <br/>
                            <textarea name="message" placeholder='Message'   rows="5"/>
                            <button className='btn-style'>Submit</button>
                            {good && "thank you..."}
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;