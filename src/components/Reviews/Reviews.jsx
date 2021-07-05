import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Reviews.scss';

// Component imports
import Menu from '../Menu/Menu';
import Rating from './Rating';
import GradientButton from '../GradButton/GradientButton';

import speakerOne from '../../assets/small-speaker-1.png';
import speakerTwo from '../../assets/small-speaker-2.png';

function Reviews() {

  const Container = styled.div`
    width: 1200px;
    position: relative;
    margin: 0 auto;
    margin-top: 156px;
  `;

  const reviews = [
    {
      type: 'ARTIST',
      caption: `"Love it, it's the best. I can't live without it!"`,
    },
    {
      type: 'PRODUCER',
      caption: `"Love it, it's the best. I can't live without it!"`,
    },
    {
      type: 'MUSIC FAN',
      caption: `"Love it, it's the best. I can't live without it!"`,
    }
  ];

  const renderReviews = (arr) => {
    return arr.map((review, index) => (
      <div key={`${index}_${review.type}`} className="review-col">
        <Rating rating={5} />
        <h3 className="review-type">{review.type}</h3>
        <p className="review-caption">{review.caption}</p>
      </div>
    ))
  };

  return (
    <section className="reviews-main-container">
      <Menu activeColour={'#1FE1E9'} />
      
      <div className="try-button">
        <Link to="/pricing">
          <GradientButton mainColour={'#fff'} radialGradientColour={'#191919'} textColour={'#1FE1E9'} text={'TRY IT NOW'} />
        </Link>
      </div>

      <Container>
        <div className="reviews-container">
          <div className="reviews-images">
            <img src={speakerOne} alt="speaker" className="speakers" id="speakerOne" />
            <img src={speakerTwo} alt="speaker" className="speakers" id="speakerTwo" />
          </div>
          <div className="reviews-main-right">
            <div className="header-reviews">
              <h1 style={{ fontSize: '40px', color: '#fff', fontWeight: '700'}}>REVIEWS</h1>
              <div className="review-content">
                {renderReviews(reviews)}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Reviews;
