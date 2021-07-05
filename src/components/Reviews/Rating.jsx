import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.scss';

function Rating() {

  return (
    <div style={{paddingBottom: '15px'}}>
      <FontAwesomeIcon icon={faStar} size="sm" className="star-icon" />
      <FontAwesomeIcon icon={faStar} size="sm" className="star-icon" />
      <FontAwesomeIcon icon={faStar} size="sm" className="star-icon" />
      <FontAwesomeIcon icon={faStar} size="sm" className="star-icon" />
      <FontAwesomeIcon icon={faStar} size="sm" className="star-icon" />
    </div>
  );
}

export default Rating;
