import './Home.css'
import PageProgress from 'react-page-progress'

import React, { useRef } from "react";
import { Link } from "react-router-dom"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'

function Home() {
    const FadeUp = batch(Fade(), Move(), Sticky(), ZoomIn());
    // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const contactCall = useRef(null)
    const handleClick = () => contactCall.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    


    return (
        <div>
            <PageProgress color={'orange'} height={5} />
            <div className="nav-bar">
                <Link to="/resume"> <h3>Resume</h3></Link>
                <a onClick={handleClick}><h3>Contact</h3></a>
            </div>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "3em" }}>
                            <div className="whoami-text">
                                <p>whoami?</p>
                                <img src="https://static.thenounproject.com/png/54414-200.png" />
                            </div>
                        </span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={1}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "3em" }}>i am aslan shaken</span>
                    </Animator>
                </ScrollPage>
                
                <About />
                <Skills />
                <Projects />

                <ScrollPage page={13}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "3em" }}>contact me</span>
                    </Animator>
                </ScrollPage>

                {/* <ScrollPage page={14}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <div ref={contactCall} className="contact-container" >
                            <img src={Photo} />
                            <h2>Email: aslanshaken@gmail.com</h2>
                            <a href="https://github.com/leeuwork"><img className="link-img" src="https://image.flaticon.com/icons/png/512/25/25231.png" /></a>
                            <a href="https://www.linkedin.com/in/aslanshaken/"><img className="link-img" src="https://library.kissclipart.com/20180907/ehe/kissclipart-linkedin-icon-for-resume-clipart-social-media-link-79f9bc808e514401.jpg" /></a>
                            <a href="#"><img className="link-img" src="https://www.pngfind.com/pngs/m/2-23339_black-and-white-instagram-logo-instagram-logo-2018.png" /></a>
                        </div>
                    </Animator>
                </ScrollPage> */}

            </ScrollContainer >

            <Contact contactCall={contactCall} />
        </div>
    )
}

export default Home;