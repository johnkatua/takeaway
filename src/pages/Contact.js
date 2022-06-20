import React from 'react';
import { IconContext } from 'react-icons';
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

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
              Go to Linkedin
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
              Go to Twitter
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
              Go to Github
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;