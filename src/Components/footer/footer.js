import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-distributed">
            <div className="footer-left">
                <img src="https://raw.githubusercontent.com/satty26/ideathon/main/images/cellt.png" alt=""></img>
                <br/>
                    <p className="footer-links">
                        <a href="#" className="link-1">HOME</a>
                        <a href="#vision">ABOUT</a>
                        <a href="#event">EVENT</a>
                        <a href="#">RESOURCES</a>
                        <a href="#">TEAM</a>
                    </p>
                <p className="footer-company-name">E-Cell IIIT Pune © 2021</p>
            </div>

            <div className="footer-center">
            <div>
            <RoomIcon style={{color:'fdca40',fontSize:'37px'}}/>
            <p><span>E-Cell IIIT Pune
            </span> Near Bopdev Ghat, Yewalewadi, Pune-411048</p>
            </div>
                <br/>
            <div style={{marginTop:'3vh'}}>
            <MailIcon style={{color:'fdca40',fontSize:'35px'}}/>
            <p><a href="mailto:ecell@iiitp.ac.in">ecell@iiitp.ac.in</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
            <span>About E-Cell</span>
            E-Cell IIIT Pune is committed to provide assistance to the budding entrepreneurs to become the future leaders.
            </p>
            <div className="footer-icons">
            <a href="#" target="_blank" rel="noreferrer"><FacebookIcon/></a>
            <a href="https://instagram.com/ecell_iiitp?igshid=6ivz7097rmfr" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/company/e-cell-iiit-pune" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
        </div>
    </div>
    )
}

export default Footer
