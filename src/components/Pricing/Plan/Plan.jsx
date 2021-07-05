import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

import './Plan.scss';

// Component imports
import GradientButton from '../../GradButton/GradientButton';

function Plan(props) {

  const { type, frequency, price, points, colour, compColour } = props;

  // iterate through points prop array
  // return an li for each point
  const renderPlanPoints = (arr) => {
    return points.map((point) => (
      <li key={price} className="plan-point">
        <FontAwesomeIcon icon={faMusic} size="sm" className="music-note-plan" />
        {point}
      </li>
    ))
  };

  const Divider = styled.div`
    width: 80px;
    height: 2px;
    background-color: ${colour};
    display: block;
    margin: 10px 0;
  `;

  return (
    <div className="plan-container">
      <h4 style={{ color: `${colour}`, fontSize: '23px', margin: 0}}>{type}</h4>
      <Divider />
      <h3 style={{ color: `${colour}`, fontSize: '25px', margin: 0}}>{frequency}</h3>
      <h1 style={{ color: `${colour}`, fontSize: '73px', margin: 0}}>{price}</h1>
      <ul style={{padding: 0}}>
        {renderPlanPoints(points)}
      </ul>

      <GradientButton mainColour={colour} radialGradientColour={compColour} text={'SELECT'}/>
    </div>
  );
}

export default Plan;
