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
              This application aims to help students at The Technical University of Kenya have easy access to
              all the past papers done within the  institutions.  Major beneficiaries are 
              those students taking their degree and diploma courses.
            </p>
             <button className='view--app__btn'>
              <a href='https://leafy-licorice-c435d7.netlify.app' target="_blank">
                View App
              </a>
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
              This app helps people who have either lost or misplaced any item. You can also share a  
              photo and a short description of the item in case you happen to find something which you do not own.
            </p>
            <button>
              <a href='https://hilarious-cobbler-e87906.netlify.app' target="_blank">
                View App
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;