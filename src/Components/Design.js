import React, { useEffect } from 'react'
import '../team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AmolJain from '../Images/AmolJain.png'
import HarshArora from '../Images/HarshArora.png'
import Ishpreet  from '../Images/Ishpreet.png'
import SaswatSubhamBehera from '../Images/SaswatSubhamBehera.png'
import './style.css'
import CardComponent from './CardComponent'


const Design = ()=>{
    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='desi'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Design <span> Team</span></h1>
       
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Amol Jain' heading='Design Head' imagelk={AmolJain} linkedlk={'https://www.linkedin.com/in/amol-jain-46a795213'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Harsh Arora' heading='Design Associate' imagelk={HarshArora} linkedlk={'https://www.linkedin.com/in/harsh-arora-56324519b'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Ishpreet' heading='Design Associate' imagelk={Ishpreet} linkedlk={'https://www.linkedin.com/in/ishpreet-singh-44b818200'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Kunal Meena' heading='Design Associate' imagelk={SaswatSubhamBehera} linkedlk={'https://www.linkedin.com/in/kunal-meena-882237201'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default Design