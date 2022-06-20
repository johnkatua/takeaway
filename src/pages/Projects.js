import React from 'react';
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";


const Projects = () => {
  return (
    <div id="projects-section" className='projects--wrapper'>
      <div className='projects--wrapper__intro'>
        <p className='projects--wrapper__intro--title'>
          Passionate about solving problems in the simplest way possible.
        </p>
        <p className='projects--wrapper__intro__desc'>
          Always striving to be better version of myself and I love building stuff that other people may find helpful to use
          in their everyday life.
        </p>
      </div>
      <div className='projects--wrapper__cards'>
        <div className='project-A'>
          <div className='project-A__img'>
            <img src={image3} alt='project-A' />
          </div>
          <div className='project-A__details'>
            <h3>Tuk Repo</h3>
            <p>
              This application aims to help people who have either lost or misplaced any item 
              or incase you find something which does not belong to you just share the photo of the item and
              a short description to see if the owner can locate it.
            </p>
            <button>
              View App
            </button>
          </div>
        </div>
        <div className='project-B'>
          <div className='project-A__img'>
            <img src={image4} alt='project-B' />
          </div>
          <div className='project-A__details'>
            <h3>Lost & Found</h3>
            <p>
              This application aims to help people who have either lost or misplaced any item 
              or incase you find something which does not belong to you just share the photo of the item and
              a short description to see if the owner can locate it.
            </p>
            <button>
              View App
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;