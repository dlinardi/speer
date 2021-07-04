import './Landing.scss';

// Component imports
import Menu from "../Menu/Menu";

function Landing() {
  return (
    <div className="landing-container">
      <Menu activeColour={"#88171a"} />
    </div>
  );
}

export default Landing;
