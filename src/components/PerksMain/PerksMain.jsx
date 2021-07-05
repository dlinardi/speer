import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './PerksMain.scss';

// Component imports
import MenuBlackBg from '../Menu/MenuBlackBg';
import GradientButton from '../GradButton/GradientButton';

function PerksMain() {

  const Container = styled.div`
    width: 960px;
    position: relative;
    margin: 0 auto;
    margin-top: 156px;
  `;

  const Divider = styled.div`
    width: 80px;
    height: 2px;
    background-color: ${props => props.colour};
    display: block;
    margin: 10px 0;
  `;

  const perks = [
    {
      title: 'Subscription Payment Model',
      caption: 'No commitment, cancel anytime. Never worry about forgetting a payment again!',
      colour: '#D24848',
    },
    {
      title: 'No Fee Cancellation Policy',
      caption: 'No commitment, cancel anytime. Never worry about forgetting a payment again!',
      colour: '#1FE1E9',
    },
    {
      title: 'Subscription Payment Model',
      caption: 'No commitment, cancel anytime. Never worry about forgetting a payment again!',
      colour: '#FFB33F',
    }
  ];

  const renderPerks = (arr) => {
    return arr.map((perk, index) => (
      <div key={`${index}_perk.colour`} className="perk-main-col">
        <Divider colour={perk.colour}/>
        <h3 className="perk-main-title" style={{color: perk.colour}}>{perk.title}</h3>
        <p className="perk-main-caption">{perk.caption}</p>
      </div>
    ))
  };

  return (
    <section className="perks-main-container">
      <MenuBlackBg activeColour={'#191919'} />
      <div className="try-button">
            <Link to="/pricing"><GradientButton mainColour={'#f72359'} radialGradientColour={'#FFB33F'} text={'TRY IT NOW'} /></Link>
      </div>
      <Container>
        <div className="perks-main-content">
          <h1 style={{ fontSize: '40px', color: '#fff', fontWeight: '700' }}>PERKS</h1>
          <div className="perk-main-container">
            {renderPerks(perks)}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PerksMain;
