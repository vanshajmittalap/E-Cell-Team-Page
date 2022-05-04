import React, { useEffect } from 'react'
import Member from '../Images/user.png'
import '../team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AavishkarMahajan from '../Images/AavishkarMahajan.png'
import AmolJain from '../Images/AmolJain.png'
import SuryanshKumar from '../Images/SuryanshKumar.png'
import MohammadKaifAhmed from '../Images/MohammadKaifAhmed.png'
import AkanshaSah from '../Images/AkanshaSah.png'
import RiteshGhate from '../Images/RiteshGhate.png'
import './style.css'
import CardComponent from './CardComponent'

const Web_Dev = ()=>{
    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='mark'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Marketing <span></span></h1>
        
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Aavishkar Mahajan' heading='Marketing Head' imagelk={AavishkarMahajan} linkedlk={'https://www.linkedin.com/in/aavishkar-mahajan-04673b207'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Amol Jain' heading='Social Media Lead' imagelk={AmolJain} linkedlk={'https://www.linkedin.com/in/amol-jain-46a795213'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Suryansh Kumar' heading='Marketing Associate' imagelk={SuryanshKumar} linkedlk={'https://www.linkedin.com/in/suryansh-kumar-828b41141'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Mohammad Kaif Ahmed' heading='Marketing Associate' imagelk={MohammadKaifAhmed} linkedlk={'https://www.linkedin.com/in/mohammad-kaif-ahmed-847354202'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Sannidhi Gowri Naga Krishna Geethan' heading='Marketing Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/geethan-sannidhi-65b9981b7'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Akansha Sah' heading='Marketing Lead' imagelk={AkanshaSah} linkedlk={'https://www.linkedin.com/in/akanksha-sah-a46865168'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Devesh Bhardwaj' heading='Marketing Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/devesh-bhardwaj-6660a51bb'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Ritesh Ghate' heading='Marketing Associate' imagelk={RiteshGhate} linkedlk={'https://www.linkedin.com/in/ritesh-ghate-7913b1201'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default Web_Dev