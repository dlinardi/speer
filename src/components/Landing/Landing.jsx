import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';

import './Landing.scss';

// Image imports
import imageOne from '../../assets/img-1.png';
import imageTwo from '../../assets/img-2.png';
import imageThree from '../../assets/img-3.png';

// Component imports
import Menu from "../Menu/Menu";
import GradientButton from '../GradButton/GradientButton';
import Footer from '../Footer/Footer';
import PerksMain from '../PerksMain/PerksMain';


function Landing(props) {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <section className="landing-container">
        <Menu activeColour={"#D34848"} />
        <div className="slide-container">
          <div className="hero-caption-container">
            <div className="hero-caption-title">INTERACTIVE CONCERT EXPERIENCE</div>
            <div className="hero-caption-subtitle">Experience your favourite artists like never before and from the comfort of your own home.</div>
            <Link to="/pricing"><GradientButton mainColour={'#f72359'} radialGradientColour={'#FFB33F'} text={'TRY IT NOW'} /></Link>
          </div>
          <AutoplaySlider
            className="hero-slider"
            play={true}
            cancelOnInteraction={false}
            interval={10000}
          >
            <div data-src={imageOne} />
            <div data-src={imageTwo} />
            <div data-src={imageThree} />
          </AutoplaySlider>
        </div>
      </section>
      <PerksMain />
      <Footer />
    </>
  );
}

export default Landing;
