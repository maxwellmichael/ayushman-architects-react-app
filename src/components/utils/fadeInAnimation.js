import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

export const FadeInFromTop = ({ isVisible, children }) => {
  const props = useSpring({
    to: {opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0px)" : "translateY(-400px)"},
    config: config.slow,
    delay: 10,
  });
  return <div><animated.div style={props}>{children}</animated.div></div>;
};

export const FadeInFromLeft = ({ isVisible, children }) => {
    const props = useSpring({
      to: {opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0px)" : "translatex(-100%)"},
      config: config.slow,
      delay: 10,
    });
    return <div><animated.div style={props}>{children}</animated.div></div>;
};

export const FadeInFromRight = ({ isVisible, children }) => {
    const props = useSpring({
      to: {opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0%)" : "translateX(100%)"},
      config: config.slow,
      delay: 10,
    });
    return <div style={{marginTop:0}}><animated.div style={props}>{children}</animated.div></div>;
};

export const FadeInFromBottom = ({ isVisible, children }) => {
    const props = useSpring({
      to: {opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(-10px)" : "translateY(100px)"},
      config: config.slow,
      delay: 10,
    });
    return <div><animated.div style={props}>{children}</animated.div></div>;
};


const FadeInContainer = ({ children, FadeIn }) => {
    const [isVisible, setVisibility] = useState(false);
    const onChange = visiblity => {
        visiblity && setVisibility(visiblity);
    };

  return (
    <VisibilitySensor offset={5} onChange={onChange}>
      <FadeIn isVisible={isVisible}>{children}</FadeIn>
    </VisibilitySensor>
  );
};


export default FadeInContainer;
