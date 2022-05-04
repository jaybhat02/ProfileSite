import { contact } from '../../portfolio'
import './Contact.css'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Penserlogo from './penserLogo.webp';
import UWLogi from './UWLogo.png';
import GrantMatchLogo from './GrantMatch.png';

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='Experience'>
      <h2 className='section__title'>Past Experience</h2>
      <div id="inline"> 
      <div id="company"><Avatar src={GrantMatchLogo} sx={{ width: 150, height: 150 }}/>
        <Chip id='companyName'label="GrantMatch" variant="outlined" /> <div id='companyPosition'>Junior Software Developer</div> 
      </div> 
      <div id="company"><Avatar src={Penserlogo} sx={{ width: 150, height: 150 }}/> 
        <Chip id='companyName' label="Penser.io" variant="outlined" /> <div id='companyPosition'>Developer Intern</div> 
      </div> 
      <div id="company"><Avatar src={UWLogi} sx={{ width: 150, height: 150 }}>k</Avatar>
        <Chip id='companyName' label="University of Waterloo" variant="outlined" /> <div id='companyPosition'>Research Engineer Intern</div> 
        </div> 
      </div> 
    
      
    </section>
  )
}

export default Contact
