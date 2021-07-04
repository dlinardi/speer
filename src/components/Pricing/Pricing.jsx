import styled from "styled-components";
import './Pricing.scss';

// Component imports
import MenuBlackBg from '../Menu/MenuBlackBg';
import Plan from './Plan/Plan';

function Pricing() {

  const Container = styled.div`
    width: 960px;
    position: relative;
    margin: 0 auto;
    margin-top: 156px;
  `;

  const plans = [
    {
      type: 'BASIC',
      frequency: 'MONTHLY',
      price: '$9',
      points: ['Very good', 'Amazing', 'Perfect job', 'Love this', "It's so good", 'Features'],
      colour: '#D24848',
    },
    {
      type: 'ADVANCED',
      frequency: 'YEARLY',
      price: '$99',
      points: ['Very very good', 'Even Amazing', 'Perfect job', 'Love this more', "It's so so good", 'More Features'],
      colour: '#FFB33F',
    },
    {
      type: 'PRO',
      frequency: 'YEARLY',
      price: '$120',
      points: ['Very very good', 'Even more', 'Perfect job', 'Love this more', "It's so so good", 'More Features'],
      colour: '#1FE1E9',
    },
  ]
    
  const renderPlans = (arrPlans) => {
    return arrPlans.map((plan) => (
      <Plan
        key={plan.type}
        type={plan.type}
        frequency={plan.frequency}
        price={plan.price}
        points={plan.points}
        colour={plan.colour}
      />
    ))
  };

  <Plan />

  return (
    <section className="pricing-container">
      <MenuBlackBg activeColour={'#191919'} />
      <Container>
        <div className="pricing-content">
          <h1 style={{fontSize: '40px', color: '#fff', fontWeight: '700'}}>PRICING</h1>
          <p style={{fontSize: '26px', color: '#fff', paddingBottom: '200px'}}>Test out our app today! Choose from three subscription based payment models.</p>
        </div>
        <div className="pricing__plans-container">
          {renderPlans(plans)}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
