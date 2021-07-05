import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './GetNow.scss';

// Component imports
import GradientButton from '../GradButton/GradientButton';
import MenuBlackBg from '../Menu/MenuBlackBg';

function GetNow(props) {

  const Container = styled.div`
    width: 960px;
    position: relative;
    margin: 0 auto;
    margin-top: 156px;
  `;

  return (
    <section className="gn-container">
      <MenuBlackBg activeColour={'#191919'} />
      <Container>
        <div className="gn-content">
          <div className="gn-text">
            <h1 style={{ fontSize: '46px', color: '#D34848', fontWeight: '700', margin: 0 }}>GET EXP|CON NOW</h1>
            <h3 style={{ fontSize: '31px', color: '#fff', fontWeight: '400', margin: 0 }}>Purchase and download the app.</h3>
          </div>
          <Link to="/pricing"><GradientButton mainColour={'#f72359'} radialGradientColour={'#FFB33F'} text={'TRY IT NOW'} /></Link>
        </div>
      </Container>
    </section>
  );
}

export default GetNow;
