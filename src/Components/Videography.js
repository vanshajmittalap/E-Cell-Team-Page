import React, { useEffect } from 'react'
import Member from '../Images/user.png'
import '../team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MohammadKaifAhmed from '../Images/MohammadKaifAhmed.png'
import SarveshKesharwani from '../Images/SarveshKesharwani.png'
import JayDhoot from '../Images/JayDhoot.png'
import PranavMore from '../Images/PranavMore.png'
import './style.css'
import CardComponent from './CardComponent'

const Videography = ()=>{
    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='vide'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Videography <span></span></h1>
        
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Mohammad Kaif Ahmed' heading='Video Editor' imagelk={MohammadKaifAhmed} linkedlk={'https://www.linkedin.com/in/mohammad-kaif-ahmed-847354202'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Sarvesh Kesharwani' heading='Video Editor' imagelk={SarveshKesharwani} linkedlk={'https://www.linkedin.com/in/sarvesh-kesharwani-172b51201'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Soham Tembhurne' heading='Video Editor' imagelk={Member} linkedlk={'https://www.linkedin.com/in/soham-tembhurne-9ab57a214'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Jay Dhoot' heading='Video Editor' imagelk={JayDhoot} linkedlk={'https://www.linkedin.com/in/jay-dhoot-607a9b204'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Pranav More' heading='Video Editor' imagelk={PranavMore} linkedlk={'https://www.linkedin.com/in/pranav-more-80374a206'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Tinkal Kumar' heading='Video Editor' imagelk={Member} linkedlk={'https://www.linkedin.com/in/tinkal-kumar-27390a202'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Raunak Shalya' heading='Video Editor' imagelk={Member} linkedlk={'https://www.linkedin.com/in/raunak-shalya-5ba781201'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default Videography