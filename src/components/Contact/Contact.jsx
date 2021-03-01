import './Contact.css'
import Photo from './Img/1.jpg'

function Contact(props) {
    return (
        <div  ref={props.contactCall}>
            <div className="contact-container" >
                <img src={Photo} />
                <h2>Email: aslanshaken@gmail.com</h2>
                <a href="https://github.com/leeuwork" target="_blank"><img className="link-img" src="https://image.flaticon.com/icons/png/512/25/25231.png" /></a>
                <a href="https://www.linkedin.com/in/aslanshaken/" target="_blank"><img className="link-img" src="https://library.kissclipart.com/20180907/ehe/kissclipart-linkedin-icon-for-resume-clipart-social-media-link-79f9bc808e514401.jpg" /></a>
                <a href="#" target="_blank" ><img className="link-img" src="https://www.pngfind.com/pngs/m/2-23339_black-and-white-instagram-logo-instagram-logo-2018.png" /></a>
            </div>
            <div className="button-container">
                <img onClick={props.handleButton} src="https://cdn2.iconfinder.com/data/icons/abstract-9/32/go_up_arrow-512.png" />
            </div>
        </div>
    )
}

export default Contact