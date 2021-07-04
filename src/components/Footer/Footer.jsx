import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './Footer.scss';

// Component imports

function Footer() {

  const Container = styled.div`
    width: 960px;
    position: relative;
    margin: 0 auto;
    margin-top: 100px;
  `;

  return (
    <section className="footer-container">
      <Container>
        <div className="footer-content">
          <a className="footer-email" href="mailto:support@experienceconcerts.co">
            <FontAwesomeIcon icon={faEnvelope} className="mail-icon" size="lg" />
            <p style={{ fontSize: '24px', color: '#fff' }}>support@experienceconcerts.co</p>
          </a>
          <div className="footer-copyright">
            <h1 style={{ fontSize: '36px', color: '#fff', fontWeight: '400' }}>EXP|CON</h1>
            <h6 style={{ fontSize: '16px', fontWeight: '400', color: '#fff' }}>2019 &copy; All Rights Reserved | Speer Technologies Incorporated</h6>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
