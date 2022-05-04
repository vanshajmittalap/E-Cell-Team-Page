import React, { useEffect } from 'react'
import Member from '../Images/user.png'
import '../team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import JayAdvani from '../Images/JayAdvani.png'
import PiyushGupta from '../Images/PiyushGupta.png'
import PreritShrivastava from '../Images/PreritShrivastava.png'
import './style.css'
import CardComponent from './CardComponent'

const PublicRelations = ()=>{
    useEffect(()=>{
        AOS.init()
    }) 
    return(
        <div className='main' id='pubr'>
        <h1 data-aos='zoom-in' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='heading' style={{marginTop:'70px', marginBottom:'80px'}}>Public <span> Relations</span></h1>
        
        <div className="containercards">
					<div className="tc">
                    <CardComponent name='Jay Advani' heading='Public Relations Head' imagelk={JayAdvani} linkedlk={'https://www.linkedin.com/in/saswat-subham-behera-215aa7200'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Dharamveer' heading='Public Relations Lead' imagelk={Member} linkedlk={''} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Sanskar Hasija' heading='Public Relations Lead' imagelk={Member} linkedlk={'https://www.linkedin.com/in/sanskar-hasija'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Piyush Gupta' heading='Public Relations Manager' imagelk={PiyushGupta} linkedlk={'https://www.linkedin.com/in/piyushg9794'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Prasad Dalwee' heading='Public Relations Manager' imagelk={Member} linkedlk={'https://www.linkedin.com/in/prasad-dalwee'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Tejo Kaushal' heading='Public Relations Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/tejo-kaushal-aa7494201'} githublk={''} maillk={''}/>
					</div>
					<div className="tc">
                    <CardComponent name='Burhanuddin Latsaheb' heading='Public Relations Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/burhanuddin-latsaheb-7a2707206'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Prerit Srivastava' heading='Public Relations Associate' imagelk={PreritShrivastava} linkedlk={'https://www.linkedin.com/in/prerit-srivastava-5309391bb'} githublk={''} maillk={''}/>
                    </div>
					<div className="tc">
                    <CardComponent name='Omkar Bhartikar' heading='Public Relations Associate' imagelk={Member} linkedlk={'https://www.linkedin.com/in/omkar-bharitkar-88a912200'} githublk={''} maillk={''}/>
					</div>
		</div>
        </div>
    )
}

export default PublicRelations