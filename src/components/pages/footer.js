import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEye,faEyeSlash,  } from '@fortawesome/free-regular-svg-icons';
import { faUpLong, faGhost, faDumpsterFire, faFilm } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip'

export default function footer({ onEyeClick,isMinimalView }) {
    return (
        <div className="footer">
            <Tooltip id="github" style={{ backgroundColor: "#12121e", color: "rgba(1, 249, 199)"}} />
            <Tooltip id="linkedin" style={{ backgroundColor: "#12121e", color: "rgba(1, 249, 199)"}} />
            <Tooltip id="email" style={{ backgroundColor: "#12121e", color: "rgba(1, 249, 199)"}} />
            <Tooltip id="eye" style={{ backgroundColor: "#12121e", color: "rgba(1, 249, 199)"}} />
            <div className="footer-socials ">
                <a 
                href="https://github.com/collinsregs" 
                target="_blank" 
                rel="noopener" 
                className='social-link footer-box'
                data-tooltip-id="github"
                data-tooltip-content="Github"
                data-tooltip-place="top"
                >
                    <FontAwesomeIcon icon={faGithub} className='footer-icon ' />
                </a>
                <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener" 
                className='social-link footer-box'
                data-tooltip-id="linkedin"
                data-tooltip-content="LinkedIn"
                data-tooltip-place="top"
                >
                    <FontAwesomeIcon icon={faLinkedin} className='footer-icon ' />
                </a>
                <a 
                href="mailto:collinsregs@gmail.com" 
                className='social-link footer-box'
                data-tooltip-id="email"
                data-tooltip-content="Email"
                data-tooltip-place="top"
                >
                    <FontAwesomeIcon icon={faEnvelope} className='footer-icon' />
                </a>
                <a 
                href="/" 
                className='social-link footer-box'
                data-tooltip-id="eye"
                data-tooltip-content="Ne pas voir la forêt à cause des arbres"
                data-tooltip-place="top"
                onClick={(e) => {
                    e.preventDefault();
                    onEyeClick();
                }}
                >
                    <FontAwesomeIcon 
                    icon={isMinimalView ? faDumpsterFire : faFilm}  
                    className='footer-icon' />
                </a>
            </div>


        </div>
    );
}