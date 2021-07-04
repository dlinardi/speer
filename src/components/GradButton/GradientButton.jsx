import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './GradientButton.scss';

const GradientButton = (props) => {

  const buttonRef = useRef(null);

  const mouseMoveEvent = (e) => {
    const { x, y } = buttonRef.current.getBoundingClientRect();
    buttonRef.current.style.setProperty('--x', e.pageX - x + 'px');
    buttonRef.current.style.setProperty('--y', e.pageY - y + 'px');
  }

  useEffect(() => {
    let reference = buttonRef.current;

    if (buttonRef) {
      buttonRef.current.addEventListener('mousemove', mouseMoveEvent);
    }

    return () => reference ? reference.removeEventListener('mousemove', mouseMoveEvent) : null
  }, [buttonRef])
  
  return <button ref={buttonRef} className="gradient-button"><span>{props.text}</span></button>;
}

export default GradientButton;
