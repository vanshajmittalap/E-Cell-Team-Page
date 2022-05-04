import React, { useEffect } from 'react'
import Member from '../Images/user.png'
import '../team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import RiyaAggarwal from '../Images/RiyaAggarwal.png'
import SakshamKathuria from '../Images/SakshamKathuria.png'
import './style.css'
import CardComponent from './CardComponent'

const Content = ()=>{
    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='cont'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Content <span></span></h1>
        
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Riya Aggarwal' heading='Content Head' imagelk={RiyaAggarwal} linkedlk={'https://www.linkedin.com/in/riya-aggarwal-2807'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Tanmaye Devraj' heading='Content Manager' imagelk={Member} linkedlk={'https://www.linkedin.com/in/tanmaye-devaraj-b2935a1a1'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Saksham Kathuria' heading='Content Associate' imagelk={SakshamKathuria} linkedlk={'https://www.linkedin.com/in/saksham-kathuria-397a37202'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Yerakaraju Midhun Varma' heading='Content Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/midhun-varma-yerakaraju-a470a9202'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Mannan Jain' heading='Content Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/mannan-j-82b256106'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default Content