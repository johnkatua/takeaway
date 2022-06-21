import React from 'react';
import { IconContext } from 'react-icons';
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import "../components/index.css";

const Contact = () => {
  return (
    <div id="contact-section" className='contact--wrapper'>
      <div className='contact--wrapper__intro'>
        <p>
          Let's Get in Touch
        </p>
        <p>
          While we're good with smoke signals, there are simpler ways for us to get in touch.
        </p>
      </div>
      <div className='contact--wrapper__links'>
        <div className='links__linkedin'>
          <div className='links__linkedin--icon'>
            <IconContext.Provider value={{ color: "black", className: "react-icons" }}>
              <div>
                <BsLinkedin />
              </div>
            </IconContext.Provider>
          </div>
          <div className='links__linkedin--notice'>
            Let's connect via Linkedin
          </div>
          <div className='links__linkedin--btn'>
            <button>
              <a href='https://www.linkedin.com/in/johnkatua/' target="_blank">Go to Linkedin</a>
            </button>
          </div>
        </div>
        <div className='links__twitter'>
          <div className='links__linkedin--icon'>
            <IconContext.Provider value={{ color: "black", className: "react-icons" }}>
              <div>
                <BsTwitter />
              </div>
            </IconContext.Provider>
          </div>
          <div className='links__linkedin--notice'>
            Let's connect via twitter
          </div>
          <div className='links__linkedin--btn'>
            <button>
              <a href='https://twitter.com/realKatua_' target="_blank">Go to Twitter</a>
            </button>
          </div>
        </div>
        <div className='links__github'>
          <div className='links__linkedin--icon'>
            <IconContext.Provider value={{ color: "black", className: "react-icons" }}>
              <div>
                <BsGithub />
              </div>
            </IconContext.Provider>
          </div>
          <div className='links__linkedin--notice'>
            You might be interested in some of my github work
          </div>
          <div className='links__linkedin--btn'>
            <button>
              <a href='https://github.com/johnkatua' target="_blank">Go to Github</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;