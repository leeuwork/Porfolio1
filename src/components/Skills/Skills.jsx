import './Skills.css'
import HtmlCss from './Img/html_css.png'
import Js from './Img/js.png'
import ReactImg from './Img/react.png'
import Node from './Img/node_js.png'
import Ruby from './Img/ruby.png'
import MondoDB from './Img/mangodb.png'
import Express from './Img/express.png'
import Sql from './Img/sql.png'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


function Skills() {
    const FadeUp = batch(Fade(), Move(), Sticky(), ZoomIn());
    return (
        <div >
            <ScrollPage page={7}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <span style={{ fontSize: "3em" }}>tech.skills</span>
                </Animator>
            </ScrollPage>

            <ScrollPage page={8}>
                <div className="main-text">
                    <span style={{ fontSize: "3em" }}>
                        <Animator animation={MoveIn(-1200, 0)}>
                            <div className="skills">
                                <h6>HTML & (S) CSS</h6>
                                <img src={HtmlCss} alt="html/css" />
                            </div>
                        </Animator>
                        <Animator animation={MoveIn(1200, 0)}>
                            <div className="skills">
                                <h6>JavaScript (ES6+)</h6>
                                <img src={Js} alt="JS" />
                            </div>
                        </Animator>
                        <Animator animation={MoveIn(-1100, 0)}>
                            <div className="skills" >
                                <h6>React</h6>
                                <img src={ReactImg} alt="react" />
                            </div>
                        </Animator>
                        <Animator animation={MoveIn(1100, 0)}>
                            <div className="skills">
                                <h6>Node.js</h6>
                                <img src={Node} alt="node.js" />
                            </div>
                        </Animator>
                        <Animator animation={MoveIn(-1000, 0)}>
                            <div className="skills">
                                <h6>Ruby</h6>
                                <img src={Ruby} alt="ruby" />
                            </div>
                        </Animator>
                    </span>
                </div>
            </ScrollPage>

            <ScrollPage page={9}>
                <div className="main-text" id="skills-top" >
                    <span style={{ fontSize: "3em" }}>
                        <Animator animation={MoveIn(800, 0)}>
                            <div className="skills">
                                <h6>MangoDB </h6>
                                <img src={MondoDB} alt="MangoDB" />
                            </div>
                        </Animator>
                        <Animator animation={MoveIn(-500, 0)}>
                            <div className="skills">
                                <h6>Express</h6>
                                <img src={Express} alt="Express" />
                            </div>
                        </Animator>
                        <Animator animation={MoveIn(500, 0)}>
                            <div className="skills">
                                <h6>SQL</h6>
                                <img src={Sql} alt="sql" />
                            </div>
                        </Animator>
                    </span>
                </div>
            </ScrollPage>

        </div>
    )
}
export default Skills