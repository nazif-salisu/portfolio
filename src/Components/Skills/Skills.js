import React, { useEffect, useState } from 'react';
import './Skills.css';
import uiDesign from '../../Assets/uiDesign1.jpg';
import uiDesign1 from '../../Assets/uiDesign1.jpg';

const Skills = () => {

  const [fade, setFade] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 500) {
        setFade(true);
      } else {
        setFade(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
  }, [])

  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills</span>
        <span className='skillDes'>I can provide a clean graphic and perfect design. I offer services such as: Logo Design, Mockup Design, Product Package Design.<br /> I also offer a responsive web design frontend.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={uiDesign} alt='' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Graphic Designer</h2>
              <p>I'm a graphic designer, I can provide a proster design, logo design and banner.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={uiDesign1} alt='' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Web Designer</h2>
              <p>I can create a responsive web design with JavaScript that looks beautiful both on desktop and mobile device.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={uiDesign1} alt='' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>UI/UX Designer </h2>
              <p>I can provide a good and eyecatching User Interface and User Experience, with figma for Prototyping.</p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Skills
