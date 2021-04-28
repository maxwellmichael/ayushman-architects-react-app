import React, { useCallback, useState } from "react";
import { animated, useTransition, config } from "react-spring";
import Content from './slideContent';

import image1 from "../../images/work_images/work_image_1.jpg";
import image2 from "../../images/work_images/work_image_2.jpg";
import image3 from "../../images/work_images/work_image_3.jpg";
import image4 from "../../images/work_images/work_image_4.jpg";



const images = [
  ({ style }) => <animated.img src={image1} alt="Mountains" style={style} />,
  ({ style }) => <animated.img src={image2} alt="Beach" style={style} />,
  ({ style }) => <animated.img src={image3} alt="Desert" style={style} />,
  ({ style }) => <animated.img src={image4} alt="Desert" style={style} />
];

const slidesList = [
    {
      index: 0,
      title: 'HandySCAN 3D | SILVER Series',
      message: 'See how Flex-N-Gate uses 3D scanners to reduce quality issues on auto parts and facilitate reverse engineering of car components!',
      imageUrl: '',
      pageLink: '',
    },
    {
      index: 1,
      title: 'DISCOVER THE NEW HandySCAN 3D | BLACK Series : THE HandySCAN BLACK',
      message: 'Discover how it can help teachers and researchers harness the power of industrial 3D measurement technologies for their curricula and research projects.',
      imageUrl: '',
      pageLink: '',
    },
    {
      index: 2,
      title: 'HandySCAN 3D | SILVER Series',
      message: 'See how Flex-N-Gate uses 3D scanners to reduce quality issues on auto parts and facilitate reverse engineering of car components!',
      imageUrl: '',
      pageLink: '',
    },
    {
      index: 3,
      title: 'HandySCAN 3D | SILVER Series',
      message: 'See how Flex-N-Gate uses 3D scanners to reduce quality issues on auto parts and facilitate reverse engineering of car components!',
      imageUrl: '',
      pageLink: '',
    }
   
]



const Slides = () => {
  const [slides, setSlide] = useState(0);
  const onClick = useCallback(() => setSlide(state => (state + 1) % 4), []);

  const transitions = useTransition(slides, p => p, {
    from: { opacity: 0, transform: "translateX(100%)"},
    enter: { opacity: 1, transform: "translateX(0%)"},
    leave: { opacity: 0, transform: "translateX(-100%)"},
    config: config.slow
  });

  return (
    <div className="gallery" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Image = images[item];
        return (
          <React.Fragment>
            <Image key={key} style={props} />
            <Content data={slidesList[item]}  />
          </React.Fragment>
        
        );
      })}
    </div>
  );
};

export default Slides;
