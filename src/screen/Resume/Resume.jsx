import './Resume.css'
import DownloadLink from "react-download-link";
import {Link} from "react-router-dom"

function Resume() {
    return (
        <div>
            {/* <div>
                <DownloadLink
                    label="Save"
                    filename="myfile.pdf"
                    exportFile={() => "https://docs.google.com/document/d/e/2PACX-1vSn-X-s_OYonqbT1F7yyxLPtdoxIHWIJ13r8HFsDqU4_Hqcl6OeDUCUT96b7aYIpTlIOavphFISLSxA/pub"}
                />
            </div> */}
            <div className="resume-container">
                <div className="resume-download">
                    <Link to="/"><h1>HOME</h1></Link>
                    <h1>Resume</h1>
                    <a href="https://docs.google.com/document/d/1K1Eggy-pZI16FQUfB7qUENj5gryeivxYIKHh_jJW7Vo/edit?usp=sharing">Download</a>
                </div>
                <iframe
                    className="resume-iframe"
                    src="https://docs.google.com/document/d/e/2PACX-1vSn-X-s_OYonqbT1F7yyxLPtdoxIHWIJ13r8HFsDqU4_Hqcl6OeDUCUT96b7aYIpTlIOavphFISLSxA/pub?embedded=true">
                </iframe>
            </div>

        </div>
    )
}

export default Resume