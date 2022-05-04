import React, { useEffect } from 'react'
import Member from '../Images/user.png'
import '../team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SarthakJain from '../Images/SarthakJain.png'
import SannidhyaWalzade from '../Images/SannidhyaWalzade.png'
import TanmayModi from '../Images/TanmayModi.png'
import ShrikantMore from '../Images/ShrikantMore.png'
import TusharSharma from '../Images/TusharSharma.png'
import AkanshaSah from '../Images/AkanshaSah.png'
import './style.css'
import CardComponent from './CardComponent'

const EventManagement = ()=>{
    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='evem'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Event <span> Management</span></h1>
        
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Prathmesh Gabhane' heading='Events Head' imagelk={Member} linkedlk={'https://www.linkedin.com/in/prathmeshgabhane'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Aman Shakya' heading='Events Lead' imagelk={Member} linkedlk={'https://www.linkedin.com/in/aman-shakya-94363819b'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Sarthak Jain' heading='Events Lead' imagelk={SarthakJain} linkedlk={'https://www.linkedin.com/in/sarthak-jain-57b5311a5'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Sannidhya Walzade' heading='Events Lead' imagelk={SannidhyaWalzade} linkedlk={'https://www.linkedin.com/in/sannidhya-walzade-b04221193'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Tanmay Modi' heading='Events Manager' imagelk={TanmayModi} linkedlk={'https://www.linkedin.com/in/tanmay-modi'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Sanskar Hasija' heading='Events Manager' imagelk={Member} linkedlk={'https://www.linkedin.com/in/sanskar-hasija'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Jimit Panditputra' heading='Events Manager' imagelk={Member} linkedlk={'https://www.linkedin.com/in/jimit-panditputra'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Shrikant More' heading='Events Manager' imagelk={ShrikantMore} linkedlk={'https://www.linkedin.com/in/shrikant-more-7886751bb'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Mayank Kumar' heading='Events Co-ordinator' imagelk={Member} linkedlk={'https://www.linkedin.com/in/mayank-kumar-57a2a9206'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Divyansh Kumar' heading='Events Co-ordinator' imagelk={Member} linkedlk={'https://www.linkedin.com/in/divyansh-kumar-9a5856192'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Pankaj' heading='Events Co-ordinator' imagelk={Member} linkedlk={'https://www.linkedin.com/in/pankaj-gupta-469062179'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Gaurav Singh' heading='Events Co-ordinator' imagelk={Member} linkedlk={'https://www.linkedin.com/in/gaurav-singh-81883a1b3'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Naishyal Patel' heading='Events Co-ordinator' imagelk={Member} linkedlk={'https://www.linkedin.com/in/naishyal-patel-8214891b8'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Akansha Sah' heading='Events Associate' imagelk={AkanshaSah} linkedlk={'https://www.linkedin.com/in/akanksha-sah-a46865168'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Tushar Sharma' heading='Events Co-ordinator' imagelk={TusharSharma} linkedlk={'https://www.linkedin.com/in/tushar-sharma-838236201'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default EventManagement





