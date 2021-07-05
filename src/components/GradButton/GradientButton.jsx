import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import './GradientButton.scss';

const GradientButton = (props) => {

  const { mainColour, radialGradientColour, textColour } = props;

  const Button = styled.button`
    color: ${textColour};
    background: ${mainColour};
    &:before {
      background: radial-gradient(circle closest-side, ${radialGradientColour}, transparent);
    }
  `;

  const buttonRef = useRef(null);

  const mouseMoveEvent = (e) => {
    const { x, y } = buttonRef.current.getBoundingClientRect();

    buttonRef.current.style.setProperty('--x', e.clientX - x + 'px');
    buttonRef.current.style.setProperty('--y', e.clientY - y + 'px');
  }

  useEffect(() => {
    let reference = buttonRef.current;
    console.log('buttonRef>>>', buttonRef)

    if (buttonRef) {
      reference.addEventListener('mousemove', mouseMoveEvent);
    }

    return () => reference.removeEventListener('mousemove', mouseMoveEvent);
  }, [buttonRef])
  
  return <Button ref={buttonRef} className="gradient-button"><span>{props.text}</span></Button>;
}

export default GradientButton;
