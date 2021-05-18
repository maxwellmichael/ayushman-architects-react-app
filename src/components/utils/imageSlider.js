import { useSpring, animated } from 'react-spring'
import BG1 from '../../images/backgrounds/architecture_bg2.jpg';
import BG2 from '../../images/backgrounds/architecture_bg.jpg';
import BG3 from '../../images/backgrounds/height1.jpg';
import BG4 from '../../images/backgrounds/construction.jfif';




export default function App() {
  const sliderStyle = useSpring({
    from: { left: '0%', top: '0%', width: '100%', height: '5px', backdropFilter: 'blur(4px)', backdropFilter: 'blur(8px)', background: 'linear-gradient(to right, #c94b4b, #4b134f)' },
    to: async next => {
      while (1) {
        await next({ background: 'linear-gradient(to right, #c94b4b, #4b134f)'})
        await next({ background: 'linear-gradient(to right, #00f260, #0575e6)'})
        await next({ background: 'linear-gradient(to right, #03001e, #7303c0)'})
        await next({ background: 'linear-gradient(to right, #c94b4b, #4b134f)'})
       
      }
    },
    
  })
  return <animated.div className="script-box" style={sliderStyle} />
}