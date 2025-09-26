import './Intro.css';
import main_img from '../../Assets/main_img.png';
import TextCycler from '../Context';


const Intro = () => {
  return (
    <section id='intro'>
       <div  className='introContent' style={{height: '100vh'}}>
          <span className='hello'>Hey There, </span>
          <span className='introText'>I am <span className='introName'>NAZIF,</span> <br /><span className='ceo'>DESIGNER</span></span>
          <p className='introPara'>With over 5 years of experience as a hybrid designer,<br/> I offer a unique blend of skills in both web and graphic design.<br/> This allows me to maintain brand consistency from a business card to a <br/> fully-responsive website, ensuring a cohesive and powerful brand presence.</p>
          <a href="https://instagram.com/nazifsalisu_official"><button className='btn'>Hire Me</button></a>
        </div>
        <img src={main_img} alt='' className='bg' />
    </section>
  );
}

export default Intro;
