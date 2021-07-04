import './Landing.scss';

// Component imports
import Menu from "../Menu/Menu";

function Landing() {
  return (
    <section className="landing-container">
      <Menu activeColour={"#D34848"} />
    </section>
  );
}

export default Landing;
