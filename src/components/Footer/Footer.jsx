import styled from 'styled-components';
import './Footer.scss';

// Component imports

function Footer() {

  const Container = styled.div`
    width: 960px;
    position: relative;
    margin: 0 auto;
    margin-top: 156px;
  `;

  return (
    <section className="footer-container">
      <Container>
        <div className="footer-content">
          <div className="footer-email">
            <span className="footer-mail-icon"></span>
            <p style={{ fontSize: '26px', color: '#fff' }}>support@experienceconcerts.co</p>
          </div>
          <div className="footer-copyright">
            <h1 style={{ fontSize: '40px', color: '#fff', fontWeight: '400' }}>EXP|CON</h1>
            <h6 style={{ fontSize: '18px', fontWeight: '400', color: '#fff' }}>2019 &copy; All Rights Reserved | Speer Technologies Incorporated</h6>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
