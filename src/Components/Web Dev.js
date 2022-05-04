import React, { useEffect } from 'react'
import '../team.css'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Member from '../Images/user.png'
import RohanLekhwani from '../Images/RohanLekhwani.png'
import AkshatChaturvedi from '../Images/AkshatChaturvedi.png'
import RaushanKumar from '../Images/RaushanKumar.png'
import TarunReddy from '../Images/TarunReddy.png'
import SakshiRamsinghani from '../Images/SakshiRamsinghani.png'
import Bhuvan from '../Images/Bhuvan.png'
import VanshajMittal from '../Images/VanshajMittal.png'
import CardComponent from './CardComponent'
import './style.css'
const Web_Dev = ()=>{

    useEffect(()=>{
        AOS.init()
    }) 
    return(

        <div className='main' id='webd'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Web <span> Development</span></h1>
        
        <div className="containercards" >
					<div className="tc">
                    <CardComponent name='Rohan Lekhwani' heading='Web Development Head' imagelk={RohanLekhwani} linkedlk={'https://www.linkedin.com/in/rohanlekhwani'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Akshat Chaturvedi' heading='Web Lead' imagelk={AkshatChaturvedi} linkedlk={'https://www.linkedin.com/in/akshatchaturvedi7'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Raushan Kumar' heading='Back-End Developer' imagelk={RaushanKumar} linkedlk={'https://www.linkedin.com/in/raushan-kumar-iiitp'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Prachhi Sabita Mishra' heading='Front-End Developer' imagelk={Member} linkedlk={'https://www.linkedin.com/in/prachhi-sabita-mishra-039916191'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Mallidi Tarun Reddy' heading='Front-End Developer' imagelk={TarunReddy} linkedlk={'https://www.linkedin.com/in/mallidi-tarun-reddy-5b3079193'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Sakshi Ramsinghani' heading='Front-End Developer' imagelk={SakshiRamsinghani} linkedlk={'https://www.linkedin.com/in/sakshi-ramsinghani'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Bhuvan Bokka' heading='Front-End Developer' imagelk={Bhuvan} linkedlk={'https://www.linkedin.com/in/bhuvan-bokka'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Nishant Chaudhary' heading='Front-End Developer' imagelk={Member} linkedlk={'https://www.linkedin.com/in/nishant-chaudhary-9a250521a'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Vanshaj Mittal' heading='Front-End Developer' imagelk={VanshajMittal} linkedlk={'https://www.linkedin.com/in/vanshaj-mittal-22800a1ba'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default Web_Dev