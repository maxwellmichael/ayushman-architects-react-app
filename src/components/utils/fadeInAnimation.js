import React, { useState} from "react";
import { useSpring, useTrail, animated, config } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import { useMediaQuery } from 'react-responsive';



export const RevealAnimation = ({children}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const values = children.props.children;
  const [isVisible, setVisibility] = useState(false);
  const onChange = visiblity => {
    visiblity && setVisibility(visiblity);
  };
  const list = useTrail(values.length, {
    config: config.stiff,
    to: {opacity: isVisible ? 1 : 0, fontSize: isVisible ? isMobile?36:66 : 20},
  });
  return(
    <VisibilitySensor onChange={onChange}>
      <div className={children.props.className} style={children.props.style?children.props.style:null}>
        {list.map((props, i)=>(
          <animated.span key={i} style={{...props}}>{values[i]}</animated.span>
        ))}
      </div>
    </VisibilitySensor>
  )
};

export const RevealFadeAnimation = ({children}) => {
  const values = children.props.children;
  const [isVisible, setVisibility] = useState(false);
  const onChange = visiblity => {
    visiblity && setVisibility(visiblity);
  };
  const list = useTrail(values.length, {
    config: config.stiff,
    to: {opacity: isVisible ? 1 : 0},
  });
  return(
    <VisibilitySensor onChange={onChange}>
      <div className={children.props.className} style={children.props.style?children.props.style:null}>
        {list.map((props, i)=>(
          <animated.span key={i} style={{...props}}>{values[i]}</animated.span>
        ))}
      </div>
    </VisibilitySensor>
  )
};

export const RevealCountingAnimation = ({children, addSign}) => {

  const value = parseInt(children.props.children, 10);
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    visiblity && setVisibility(visiblity);
  };

  const props = useSpring({
    config: config.slow,
    from: {val:0},
    to: {val: isVisible ? value : 0},
  });
  return(
    <VisibilitySensor onChange={onChange}>
      <div className={children.props.className} style={children.props.style?children.props.style:null}>
        <animated.span>{props.val.interpolate(val => Math.floor(val))}</animated.span>{addSign}
      </div>
    </VisibilitySensor>
  )
};

export const FadeInFromTop = ({ isVisible, children }) => {
  const props = useSpring({
    to: {opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0px)" : "translateY(-400px)"},
    config: config.slow,
    delay: 10,
  });
  return <div><animated.div className="fade-in-main" style={props}>{children}</animated.div></div>;
};


export const FadeInFromLeft = ({ isVisible, children }) => {
    const props = useSpring({
      to: {opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0px)" : "translatex(-100%)"},
      config: config.slow,
      delay: 10,
    });
    return <div><animated.div className="fade-in-main" style={props}>{children}</animated.div></div>;
};

export const FadeInFromRight = ({ isVisible, children }) => {
    const props = useSpring({
      to: {opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0%)" : "translateX(100%)"},
      config: config.slow,
      delay: 10,
    });
    return <div><animated.div className="fade-in-main" style={{...props}}>{children}</animated.div></div>;
};

export const FadeInFromBottom = ({ isVisible, children }) => {
    const props = useSpring({
      to: {opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0px)" : "translateY(400px)"},
      config: config.slow,
      delay: 10,
    });
    return <div><animated.div className="fade-in-main" style={props}>{children}</animated.div></div>;
};


const FadeInContainer = ({ children, FadeIn, partialVisibility}) => {
    const [isVisible, setVisibility] = useState(false);
    const onChange = visiblity => {
        visiblity && setVisibility(visiblity);
    };

  return (
    <VisibilitySensor partialVisibility={partialVisibility} onChange={onChange}>
      <FadeIn isVisible={isVisible}>{children}</FadeIn>
    </VisibilitySensor>
  );
};


export default FadeInContainer;
