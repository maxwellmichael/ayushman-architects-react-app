import React, {useEffect, useState} from 'react';
import Caurosel from '../components/miscellaneous/caurosel';
import ParallaxInterior from '../components/miscellaneous/parallaxInterior';
import Article from '../components/miscellaneous/article';
import Banner from '../components/miscellaneous/banner';
import Bridge from '../images/backgrounds/bridge.jpg';
//import Building1 from '../images/backgrounds/height1.jpg';
//import Pattern from '../images/backgrounds/pattern1.jpg';




import {connect} from 'react-redux';
import {debounce} from '../components/utils/debounce';
import FadeInContainer,{FadeInFromRight, FadeInFromLeft} from '../components/utils/fadeInAnimation';
//import ParallaxContainer from '../components/utils/parallaxContainer';
import {useSpring} from 'react-spring';






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
            <div  className="home-container">
                <ParallaxInterior />
            </div>

            
            <div style={{marginTop: '100px', marginBottom: '60vh'}}  className="home-container">
                <FadeInContainer FadeIn={FadeInFromLeft}>
                    <div className="content-title">
                        Why Chose Us?
                    </div>
                </FadeInContainer>
                <br/>
                <FadeInContainer FadeIn={FadeInFromRight}>
                    <div className="content-description">
                        As a Shopify Plus Partner Agency and eCommerce development agency, we leverage the power of the platform to design, develop, and optimize beautiful eCommerce websites for fashion & lifestyle brands. We love partnering with merchants to help them scale through data-backed ecommerce development & UX design services, conversion rate optimization, and Klaviyo email marketing services.
                    </div>
                </FadeInContainer>
            </div>
            

            <div style={{marginTop: '100px'}} className="home-container">
               
                <FadeInContainer FadeIn={FadeInFromLeft}>
                    <div className="content-title">
                        Interiors Designed by Our Experts
                    </div>
                </FadeInContainer>
                 
                <FadeInContainer FadeIn={FadeInFromRight}>
                    <div className="content-description">
                        Whether it’s a magazine-like dream kitchen or your entire home, enjoy end-to-end solutions from design to installation.
                    </div>
                </FadeInContainer>
                <Caurosel />
            </div>

            
            
           
            <div style={{paddingBottom:'5vh', paddingTop:'10vh'}} className="home-container" >
                <div className="home-container">
                    <FadeInContainer FadeIn={FadeInFromRight}>
                        <div className="content-title">
                            Flawless Architectures
                        </div>
                    </FadeInContainer>
                    <FadeInContainer FadeIn={FadeInFromLeft}>
                        <div className="content-description">
                            Flawlessness is a rare commodity in the modern world, but you recognize it when you see it. That’s exactly what we have created at Ayushman.
                        </div>
                    </FadeInContainer>
                </div>

                <div className="home-container">
                    <FadeInContainer FadeIn={FadeInFromRight}>
                        <Article data={architectureArticlesData[0]} />
                    </FadeInContainer>
                    <FadeInContainer FadeIn={FadeInFromLeft}>
                        <Article data={architectureArticlesData[1]} contentSideLeft={true} />
                    </FadeInContainer>
                    <FadeInContainer FadeIn={FadeInFromRight}>
                        <Article data={architectureArticlesData[0]} />   
                    </FadeInContainer>
                </div>

            </div>

            <div className="home-container">
                <Banner imageUrl={Bridge} title="Ready to get started?" description="Let's schedule a time to discuss your goals." buttonText="CONTACT US" />
            </div>
        </div>
    );
}


export default connect()(Home);