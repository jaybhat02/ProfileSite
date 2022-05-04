import { about } from '../../portfolio'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.scss'
import resumeOne from './Resume.pdf';

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}
      <div class="content">
        <div class="content__container">
          
          <ul class="content__container__list">
            <li class="content__container__list__item">Student at UW</li>
            <li class="content__container__list__item">Future Engineer</li>
            <li class="content__container__list__item">Full Stacks Dev</li>
            <li class="content__container__list__item">AI/ML Enthusiest</li>
          </ul>
        </div>
      </div>
      
      {role && <h3 className='about__role'> {role}</h3>}
      <p className='about__desc'>{description && description}</p>
      
      <div className='about__contact center'>
        <span className='about__resume'>
          <Button variant="contained" color='primary' href={resumeOne} target="_blank">Resume</Button>
        </span>
        
        
        
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      
    </div>
  )
}

export default About
