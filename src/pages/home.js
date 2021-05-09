import React, {useEffect, useState} from 'react';
import ParallaxInterior from '../components/miscellaneous/parallaxInterior';
import Article from '../components/miscellaneous/article';
import Banner from '../components/miscellaneous/banner';
import Bridge from '../images/backgrounds/bridge.jpg';
//import Building1 from '../images/backgrounds/height1.jpg';
//import Pattern from '../images/backgrounds/pattern1.jpg';
import ConstructionBG from '../images/backgrounds/construction.jfif';
import ProjectPlanningBG from '../images/backgrounds/project-planning.jpg';
import EstimationBG from '../images/backgrounds/estimation.jpg';






import {connect} from 'react-redux';
import {debounce} from '../components/utils/debounce';
import FadeInContainer,{FadeInFromRight, FadeInFromLeft} from '../components/utils/fadeInAnimation';
//import ParallaxContainer from '../components/utils/parallaxContainer';
import {useSpring} from 'react-spring';






const Home = ()=>{


    const architectureArticlesData = [
        {
            intro:'',
            title:'Architecture Designs',
            description:'Good architects are practical dreamers, balancing the visionary with the realistic. We believe that great architecture connects emotionally to users. For over 5 years and with 200 built projects, Ayushman Architects has designed and delivered some of India’s most memorable civic, sports and entertainment buildings, from iconic stadia to ground-breaking live music venues.',
            imageUrl:'https://architizer-prod.imgix.net/media/mediadata/uploads/1618309041547FEATURED_View_from_entrance_plaza_By_JDAP.jpg?q=60&auto=format,compress&w=1680&cs=strip',
        },
        {
            intro:'',
            title:'Construction',
            description:'At Ayushman Architects we specializes in the design and construction of industrial, commercial and hotel projects. It has a nationwide network to provide a structure of efficiency and quality service. We have in-house design and engineering teams that employ advanced construction methods to execute complex projects in diverse terrains. With a background in infrastructure, commercial, and residential construction, we bring our valuable expertise to every project and are hence the preferred civil construction company.',
            imageUrl: ConstructionBG,
        },
        {
            intro:'',
            title:'Interior Designs',
            description:'A home for interior designing and a complete interior solutions. To assure a sense of well-being, it is very important to design the interior in harmony with the mind of people. Thus, we design and develop beautiful interiors, which are in accordance with contemporary designs and patterns.We not only engage in customized home interior designing and furnishing works like modular kitchen, dining rooms, living rooms but also has great advancement to designing restaurants, salon etc.',
            imageUrl: 'https://super.homelane.com/products/07dec18/homeinteriors/2.jpg',
        },
        {
            intro:'',
            title:'Project Planning',
            description:'The greatest opportunities to affect project outcomes occur early in the design process. We are dedicated to supporting the client and architect/engineer during the design process with the broad expertise of our project planning group by working together in a collaborative, team-based approach. By emphasizing the true cost of ownership of a facility over its life, we commit resources and tools that include value analysis, life cycle costing, owning and operating cost modeling, phase specific constructability and maintainability reviews, and many other services by our experts at Ayushman Architects',
            imageUrl: ProjectPlanningBG,
        },
        {
            intro:'',
            title:'Project Estimation',
            description:'At Ayushman Architects, our expert team of construction estimators offers professional construction estimating services and material takeoffs with the help of construction managers and quantity surveyors that have the expertise in providing successful residential, commercial, and industrial projects. With an in-hand experience of 15 years, we have a proven track record of delivering the right material estimates to our valuable clients for every construction trade within the fastest turnaround time. We are proficient with Planswift, Bluebeam, Trimble, RS Means, Cost Works, Xactimate, FastPIPE, FastDUCT, and Quest Estimating. Also, for zip-code based pricing out the takeoffs, we use RSmeans, Craftsmen, and our own developed databases.',
            imageUrl: EstimationBG,
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
                        We are a service company that is characterized by the satisfaction and loyalty of our clients, which has allowed us to serve them continuously through many years and in a wide variety of projects.
                    </div>
                </FadeInContainer>

            </div>
                        
            
           
            <div style={{paddingBottom:'5vh', paddingTop:'10vh'}} className="home-container" >
                <div className="home-container">
                    <FadeInContainer FadeIn={FadeInFromRight}>
                        <div className="content-title">
                            Our Services
                        </div>
                    </FadeInContainer>
                    <FadeInContainer FadeIn={FadeInFromLeft}>
                        <div className="content-description">
                            Whether it’s a magazine-like dream kitchen or your entire home, enjoy end-to-end solutions from design to Construction.
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
                        <Article data={architectureArticlesData[2]} />   
                    </FadeInContainer>
                    <FadeInContainer FadeIn={FadeInFromLeft}>
                        <Article data={architectureArticlesData[3]} contentSideLeft={true} />
                    </FadeInContainer>
                    <FadeInContainer FadeIn={FadeInFromRight}>
                        <Article data={architectureArticlesData[4]} />   
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