import React, { useEffect } from 'react'
import Member from '../Images/user.png'
import '../team.css'
import CardComponent from './CardComponent'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BhupendraSingh from '../Images/BhupendraSingh.png'
import RohanLekhwani from '../Images/RohanLekhwani.png'

import './style.css'

const Main = ()=>{

    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='ourt'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Our <span> Team</span></h1>
        
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Bhupendra Singh' heading='Administration Coordinator' imagelk={BhupendraSingh} linkedlk={''} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Rohan Lekhwani' heading='E Cell Co-ordinator' imagelk={RohanLekhwani} linkedlk={'https://www.linkedin.com/in/rohanlekhwani'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Satyam Garg' heading='E Cell Co-ordinator' imagelk={Member} linkedlk={'https://www.linkedin.com/in/satyam-garg-a89099193'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default Main