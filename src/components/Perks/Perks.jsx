import styled from 'styled-components';
import './Perks.scss';

// Component imports
import Menu from "../Menu/Menu";

function Perks() {

  const Container = styled.div`
    width: 960px;
    position: relative;
    margin: 0 auto;
    margin-top: 156px;
  `;

  const Divider = styled.div`
    width: 80px;
    height: 2px;
    background-color: #fff;
    display: block;
    margin: 10px 0;
  `;

  const perks = [
    {
      title: 'Subscription Payment Model',
      caption: 'No commitment, cancel anytime. Never worry about forgetting a payment again!'
    },
    {
      title: 'No Fee Cancellation Policy',
      caption: 'No commitment, cancel anytime. Never worry about forgetting a payment again!'
    },
    {
      title: 'Subscription Payment Model',
      caption: 'No commitment, cancel anytime. Never worry about forgetting a payment again!'
    }
  ];

  const renderPerks = (arr) => {
    return arr.map((perk, index) => (
      <div key={`${index}_perk`} className="perk-col">
        <Divider />
        <h3 className="perk-title">{perk.title}</h3>
        <p className="perk-caption">{perk.caption}</p>
      </div>
    ))
  };

  return (
    <section className="perks-container">
      <Menu activeColour={'#D34848'} />
      <Container>
        <div className="perks-content">
          <h1 style={{ fontSize: '40px', color: '#fff', fontWeight: '700' }}>PERKS</h1>
          <div className="perk-container">
            {renderPerks(perks)}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Perks;
