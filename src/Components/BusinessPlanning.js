import React, { useEffect } from 'react'
import Member from '../Images/user.png'
import '../team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SatyamSingh from '../Images/SatyamSingh.png'
import ArpanGupta from '../Images/ArpanGupta.png'
import HimanshuAggarwal from '../Images/HimanshuAggarwal.png'
import DhanashreeRevagade from '../Images/DhanashreeRevagade.png'
import './style.css'
import CardComponent from './CardComponent'

const BusinessPlanning = ()=>{
    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='busp'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Business <span> Planning</span></h1>
       
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Anand Pawar' heading='Business Planning Joint Head' imagelk={Member} linkedlk={'https://www.linkedin.com/in/anand-pawar-3099ap'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Dhanashree Revagade' heading='Business Planning Joint Head' imagelk={DhanashreeRevagade} linkedlk={'https://www.linkedin.com/in/dhanashree-revagade'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Satyam Singh' heading='Business Planning Lead' imagelk={SatyamSingh} linkedlk={'https://www.linkedin.com/in/satyamsingh026'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Arpan Gupta' heading='Business Planning Lead' imagelk={ArpanGupta} linkedlk={'https://www.linkedin.com/in/arpanguptaa'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Vishal Malik' heading='Business Planning Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/vishal-malik-17b446214'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Himanshu Agarwaal' heading='Business Planning Associate' imagelk={HimanshuAggarwal} linkedlk={'https://www.linkedin.com/in/himanshu-agrawal-8aab05204'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Rohan Khavle' heading='Business Planning Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/rohan-khavale-8248271bb'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Shyam Kumar Mishra' heading='Business Planning Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/shyam-kumar-mishra-99a90b200'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Saksham Kathuria' heading='Business Planning Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/saksham-kathuria-397a37202'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default BusinessPlanning

