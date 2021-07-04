import styled from 'styled-components';
import { Link } from "react-router-dom";

import './Plan.scss';

// Component imports

function Plan(props) {

  const { type, frequency, price, points, colour } = props;

  console.log(props, "<<<< props")

  // iterate through points prop array
  // return an li for each point
  const renderPlanPoints = (arr) => {
    return points.map((point) => (
      <li key={price} className="plan-point">{point}</li>
    ))
  };

  const Divider = styled.div`
    width: 80px;
    height: 2px;
    background-color: ${colour};
    display: block;
    margin: 10px 0;
  `;

  const StyledLinkButton = styled(Link)`
    width: 60%;
    background-color: ${colour};
    padding: 10px 20px;
    text-align: center;
    border-radius: 26px;
    border: none;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    transition: all 450ms ease-in;
    &:hover {
      cursor: pointer;
      opacity: 0.75;
    }
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

      <StyledLinkButton to="/payment">
        SELECT
      </StyledLinkButton>
    </div>
  );
}

export default Plan;
