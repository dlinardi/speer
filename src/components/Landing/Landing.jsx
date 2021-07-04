import './Landing.scss';

// Component imports
import Menu from "../Menu/Menu";

function Landing() {
  return (
    <div className="landing-container">
      <Menu activeColour={"#D34848"} />
    </div>
  );
}

export default Landing;
