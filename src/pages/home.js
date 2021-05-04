import React, {useEffect, useState} from 'react';
import Caurosel from '../components/miscellaneous/caurosel';
import ParallaxInterior from '../components/miscellaneous/parallaxInterior';
import Article from '../components/miscellaneous/article';

import {connect} from 'react-redux';
import {debounce} from '../components/utils/debounce';
import {useSpring, animated} from 'react-spring';






const Home = ()=>{

    const architectureArticlesData = [
        {
            intro:'London, United Kingdom',
            title:'Garden Pavilion',
            description:'The rear garden of a nineteen century Victorian terraced house in Hackney was expectantly awaiting a fresh start. Previous renovation works and a rear addition to the main house had left the garden in a state of disrepair. This was home to an artist looking to expand their studio space outdoors and create a new landscape to be explored as a living backdrop for work-in-progress artwork.',
            imageUrl:'https://architizer-prod.imgix.net/media/mediadata/uploads/1619024820909GardenPavilion_19.jpg?q=60&auto=format,compress&w=1680&cs=strip',
        },
        {
            intro:'South Korea, Songdo',
            title:'Songdo Central Library',
            description:'A library for the city of Songdo in South Korea is conceived of as a place for the city to congregate around Knowledge, Culture and the Community. Occupying a tight footprint of a 50m x 50m square, the cultural functions at the base are sunk into the earth while the soaring City Loft with the Childrens Library and the General Public Library looks over the sea as a place for the pursuit of knowledge, in silence and at ease.',
            imageUrl:'https://architizer-prod.imgix.net/media/mediadata/uploads/1618309041547FEATURED_View_from_entrance_plaza_By_JDAP.jpg?q=60&auto=format,compress&w=1680&cs=strip',
        },
       
    ];

    const [offsetY, setOffsetY] = useState(0);


    useEffect(()=>{
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener('scroll', debounce(handleScroll));

        return () => {
            window.removeEventListener('scroll', debounce(handleScroll));
        };
    }, [])

    const [, setAnimationOffsetY] = useSpring(() => ({
        animationOffsetY: 0
      }));

    setAnimationOffsetY({ animationOffsetY: offsetY });


    return(
        <div className="home-main">
            <animated.div  className="home-container">
                <ParallaxInterior />

                

            </animated.div>

           <br/><br/>
            <animated.div className="home-container">
                <animated.div className="content-title">
                    Interiors Designed by Our Experts
                </animated.div>
                <animated.div className="content-description">
                    Whether it’s a magazine-like dream kitchen or your entire home, enjoy end-to-end solutions from design to installation.
                </animated.div>
                <Caurosel />
            </animated.div>
           
            <animated.div style={{paddingBottom:'5vh', paddingTop:'10vh'}} className="home-container" >
                <div className="home-container">
                    <animated.div className="content-title">
                        Flawless Architectures
                    </animated.div>
                    <animated.div className="content-description">
                        Flawlessness is a rare commodity in the modern world, but you recognize it when you see it. That’s exactly what we have created at Ayushman.
                    </animated.div>
                </div>
                <Article data={architectureArticlesData[0]} />
                <Article data={architectureArticlesData[1]} contentSideLeft={true} />
                <Article data={architectureArticlesData[0]} />
                <div className="home-container">
                    
                </div>
                

            </animated.div>

           

        </div>
    );
}


export default connect()(Home);