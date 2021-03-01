import './About.css'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

function About() {
    const FadeUp = batch(Fade(), Move(), Sticky(), ZoomIn());
    return (
        <div>
            <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <span style={{ fontSize: "3em" }}>a little bit of me</span>
                </Animator>
            </ScrollPage>

            <ScrollPage page={3}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <span style={{ fontSize: "3em" }} id="software-text">
                        software engineer | full stack developer
                        </span>
                </Animator>
            </ScrollPage>


            <ScrollPage page={4}>
                <Animator animation={FadeUp}>
                    <span style={{ fontSize: "3em" }}>new york city based but open to relocate</span>
                </Animator>
            </ScrollPage>

            <ScrollPage page={5}>
                <Animator animation={FadeUp}>
                    <span style={{ fontSize: "3em" }}>
                        As a software engineer, I’m eager to build products
                        that can solve social issues to make a positive impact
                        on the world.
                        </span>
                </Animator>
            </ScrollPage>

            <ScrollPage page={6}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <div className="about-container" style={{ fontSize: "3em" }}  >
                        <div className="about-me-left">
                            <img src="https://i.ibb.co/VHmffgR/personwithnote.png" />
                        </div>
                        <div className="about-me-right">
                            <p>When I was 15
                            years old I worked in my uncle’s computer
                            repair shop. Since then I discovered the
                            wonders of computers. Most of my time I
                            performed hardware operations during my
                            work and created positive customer service
                            experience. During my associate degree I
                            took a few classes in coding because I
                            was always limited by my knowledge of
                            coding. After learning the basic concepts
                            of coding I fell in love. It’s something
                            that I can enjoy. I completed some
                            courses on youtube but it wasn’t enough for me. I started researching schools where I could go to learn coding. I discovered the General Assembly school and it was honestly the best decision in my life.
                                    </p>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </div>
    )
}
export default About