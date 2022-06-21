import React from 'react';
import image1 from '../assets/image-2.jpg';

const Bio = () => {
  return (
    <div id="bio-section" className='bio--wrapper'>
      <div className='bio--wrapper__img'>
        <img src={image1} alt='john-in-campus' />
      </div>
      <div className='bio--wrapper__details'>
        <p>
          I am a talented, ambitious, and hardworking individual, with broadskills and
          experience in web development.
        </p>
        <p>
          Furthermore, I am adapted to handling multiple tasks on a daily basis competently and
          at working well under pressure.
        </p>
        <p>
          I also have strong communication skills, good team player and make sure I deliver the best
          results
        </p>
        <p>
          I'll be graduating this coming December, with a degree in Business Information Technology
          and looking forward to be fully utilize my skills.
        </p>
      </div>
    </div>
  )
}

export default Bio;