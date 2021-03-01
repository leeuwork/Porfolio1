import './Projects.css'
import Go4petsImg from './Img/go4pets.png'
import CycleShopImg from './Img/cycleshop.png'
import Go4profitImg from './Img/go4profit.png'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

function Projects() {
    const FadeUp = batch(Fade(), Move(), Sticky(), ZoomIn());
    return (
        <div>
            <ScrollPage page={10}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <span style={{ fontSize: "3em" }}>work i have done</span>
                </Animator>
            </ScrollPage>


            <ScrollPage page={11}>
                <Animator animation={batch(Fade(), Sticky())}>
                    <div className="project-main">

                        <div className="project-container">
                            <img
                                src={CycleShopImg}
                            />
                            <h2>CycleShop</h2>
                            <p>CycleShop facilitates consumer-to-consumer sales of motorcycles through the website.
                        Full Stack application with authentication process.</p>
                            <div id="project-skills">
                                <h5>React</h5>
                                <h5>CRUD</h5>
                                <h5>Node.js</h5>
                                <h5>Express</h5>
                                <h5>MangoDB</h5>
                            </div>
                            <div id="project-links">
                                <a href="https://github.com/leeuwork/cycleshop" target="_blank">GitHub</a>
                                <a href="https://cycleshop.netlify.app/" target="_blank">Website</a>
                            </div>
                        </div>
                        <div className="project-container">
                            <img
                                src="https://i.ibb.co/KL7crfv/Screenshot-from-2021-02-11-01-16-36.png"
                            />
                            <h2>Covid-19 Tracker</h2>
                            <p>Users can get the latest information about Covid-19 confirmed cases, deaths and recovery in the US by States.</p>
                            <div id="project-skills">
                                <h5>HTML</h5>
                                <h5>CSS</h5>
                                <h5>JavaScript</h5>
                                <h5>API</h5>
                            </div>
                            <div id="project-links">
                                <a href="https://github.com/leeuwork/covid-19" target="_blank">GitHub</a>
                                <a href="https://leeuwork.github.io/covid-19/" target="_blank">Website</a>
                            </div>
                        </div>

                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={12}>
                <Animator animation={batch(Fade(), Sticky())}>
                    <div className="project-main">

                        <div className="project-container">
                            <img
                                src={Go4profitImg}
                            />
                            <h2>Go4Profit</h2>
                            <p>Bookkeeping porfolio </p>
                            <div id="project-skills">
                                <h5>HTML</h5>
                                <h5>CSS</h5>
                                <h5>PHP</h5>
                            </div>
                            <div id="project-links">
                                <a href="https://github.com/leeuwork/go4profit" target="_blank">GitHub</a>
                                <a href="http://go4profit.us/" target="_blank">Website</a>
                            </div>
                        </div>
                        <div className="project-container">
                            <img
                                src={Go4petsImg}
                            />
                            <h2>Go4Pets E-Com</h2>
                            <p>A mobile-responsive e-com platform allowing users to view, create, edit and delete items for sale.</p>
                            <div id="project-skills">
                                <h5>React</h5>
                                <h5>CRUD</h5>
                                <h5>Node.js</h5>
                            </div>
                            <div id="project-links">
                                <a href="https://github.com/leeuwork/go4pets" target="_blank">GitHub</a>
                                <a href="https://gifted-swanson-7c7f5a.netlify.app/" target="_blank">Website</a>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </div>
    )
}

export default Projects
