import React, { useEffect } from 'react'
import Member from '../Images/user.png'
import '../team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import RohanLekhwani from '../Images/RohanLekhwani.png'
import DhanashreeRevagade from '../Images/DhanashreeRevagade.png'
import AavishkarMahajan from '../Images/AavishkarMahajan.png'
import './style.css'
import CardComponent from './CardComponent'

const CorporateRelations = ()=>{
    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='corr'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Corporate <span> Relations</span></h1>
        
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Rohan Lekhwani' heading='Corporate Relations Co-ordinator' imagelk={RohanLekhwani} linkedlk={'https://www.linkedin.com/in/rohanlekhwani'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Anand Pawar' heading='Corporate Relations Co-ordinator' imagelk={Member} linkedlk={'https://www.linkedin.com/in/anand-pawar-3099ap'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Dhanashree Revagade' heading='Corporate Relations Co-ordinator' imagelk={DhanashreeRevagade} linkedlk={'https://www.linkedin.com/in/dhanashree-revagade'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Prathmesh Gabhane' heading='Corporate Relations Co-ordinator' imagelk={Member} linkedlk={'https://www.linkedin.com/in/prathmeshgabhane'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Aavishkar Mahajan' heading='Corporate Relations Co-ordinator' imagelk={AavishkarMahajan} linkedlk={'https://www.linkedin.com/in/aavishkar-mahajan-04673b207'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default CorporateRelations