import React from 'react'
import './Skill.css'

const Skill = () => {
    return (
        <div className='skill-container' id='skill'>
            <h1>Skill</h1>
            <div className='circle'>
                <div className='circle-container'>
                    <label href="/#" className='center'><img src="img/dev2.png" alt="" /></label>
                    <span href="/#" className='deg0'><img src="img/firebase.png" alt="" /></span>
                    <span href="/#" className='deg45'><img src="img/bootstrap.png" alt="" /></span>
                    <span href="/#" className='deg135'><img src="img/javascript.png" alt="" /></span>
                    <span href="/#" className='deg180'><img src="img/mongodb.png" alt="" /></span>
                    <span href="/#" className='deg225'><img src="img/nodejs.png" alt="" /></span>
                    <span href="/#" className='deg315'><img src="img/react.png" alt="" /></span>
                </div>
            </div>
            
        </div>
    )
}

export default Skill