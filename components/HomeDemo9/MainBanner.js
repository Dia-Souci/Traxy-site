import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll'
import ParticleBackground from '@/components/Common/ParticleBackground';

const MainBanner = () => {
    return (
		<>
            {/* <ParticleBackground /> */}
			<div className="new-app-main-banner-gradient-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* Banner Headline in the page */}
                        <div className="col-lg-6 col-md-12" id='no-right-pad' style={{ width:"100%",display:'flex',alignContent:'center',alignItems:'center',justifyContent:'space-between', }}>
                            <div className="new-app-main-banner-gradient-content" style={{ width:"100%",display:'flex',flexDirection:'column' , alignItems:'center' , justifyContent:'center' , textAlign:'center' }}>
                                {/* <span className="sub-title">#Try Your Demo</span> */}
                                <div className="spinny-wrapper">
                                    <h1>
                                    <span className="spinny-words">
                                        <span >ADVANCED</span>
                                        <span>AWESOME</span>
                                        <span>AMAZING</span>
                                    </span> GPS tracking platform meets Mobile Resource Management</h1>
                                </div>
                                <p>Build your all-in-one solution to tackle any business challenges.</p>
                                {/* <div className="banner-btn">
                                    <Link href="#applications">
                                        <a className="default-btn">Download our App</a>
                                    </Link>
                                </div> */}
                            </div>
                            <div className='bannerContainer'>
                                    <img
                                        src="/images/banner.png"
                                        alt="image"
                                        width={"100%"}
                                    />
                            </div>
                        </div>
                        
                        {/* Banner Photo in the left side. */}
                        {/*<div className="col-lg-6 col-md-12" style={{position : 'relative'}}>
                            <ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true} initiallyVisible={true}>
                                <div id="new-app-main-banner-gradient-image" style={{ position:'absolute', marginTop:'0px', paddingTop:'0px' , bottom : '0', right:'0'}}>
                                    <img
                                        src="/images/banner.png"
                                        alt="image"
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>*/}
                    </div>
                </div>
                    <ParticleBackground />
            </div>
		</>
    );
}

export default MainBanner;