import React, { useEffect } from 'react'
import '../team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SarthakJain from '../Images/SarthakJain.png'
import RiyaAggarwal from '../Images/RiyaAggarwal.png'
import PrakharBhatnagar  from '../Images/PrakharBhatnagar.png'
import SaswatSubhamBehera from '../Images/SaswatSubhamBehera.png'
import './style.css'
import CardComponent from './CardComponent'

const SocialMedia = ()=>{
    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='socm'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Social Media <span> Management</span></h1>
        
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Sarthak Jain' heading='Social Media Head' imagelk={SarthakJain} linkedlk={'https://www.linkedin.com/in/sarthak-jain-57b5311a5'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Riya Aggarwal' heading='Social Media Lead' imagelk={RiyaAggarwal} linkedlk={'https://www.linkedin.com/in/riya-aggarwal-2807'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Prakhar Bhatnagar' heading='Social Media Associate' imagelk={PrakharBhatnagar} linkedlk={'https://www.linkedin.com/in/prakhar-bhatnagar-0919ab1b8'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Saswat Subham Behera' heading='Social Media Associate' imagelk={SaswatSubhamBehera} linkedlk={'https://www.linkedin.com/in/saswat-subham-behera-215aa7200'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default SocialMedia