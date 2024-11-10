import React from 'react';
import './ContactMe.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='contact-container'>
      <div className='contact-info'>
        <h1 className='contact-title'>Let's Connect</h1>
        <p className='contact-description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, sunt quae blanditiis aliquid maiores enim labore iusto obcaecati repellendus magni facilis sed repudiandae at tempora quos iste suscipit placeat officiis.
        </p>
        <div className='contact-icons'>
          <a href='https://www.linkedin.com/in/rimsha-mukhtar-ahmed-6b88632b5' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='contact-icon' />
          </a>
          <a href='https://github.com/rimshamukhtar' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='contact-icon' />
          </a>
        </div>
      </div>
      <div className='contact-form'>
        <div>
          <label className='contact-label'>Your Email</label>
          <input type='text' placeholder='abc123@gmail.com' className='contact-input' />
        </div>
        <div>
          <label className='contact-label'>Subject</label>
          <input type='text' placeholder='Just saying hi' className='contact-input' />
        </div>
        <div>
          <label className='contact-label'>Message</label>
          <textarea placeholder="Let's talk about..." className='contact-textarea'></textarea>
        </div>
        <button className='contact-button'>Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
