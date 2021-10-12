import React from 'react'
import './Project.css'

const Project = ()=> {
    
    return (
        <div className='project' id='project'>
            <h1>Projects</h1>
            <div className='card-container'>
                
                {/* card de prueva 1 */}

                <div className='card'>
                    <h3>
                        Project Unnamed
                    </h3>
                    <div className='info-card'>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eaque 
                            rem placeat alias modi soluta dolores fugiat enim, atque et exercitationem 
                            quo magni earum, sunt, quod veniam repudiandae error. Ducimus?
                        </p>
                    </div>

                    <div className='project-menu'>
                        <button>View Details</button>
                        <button>View Code in Github</button>
                        <button>Open project</button>
                    </div>
                </div>

                {/* card de prueva 2 */}

                <div className='card'>
                    <h3>
                        Project Unnamed 2
                    </h3>
                    <div className='info-card'>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eaque 
                            rem placeat alias modi soluta dolores fugiat enim, atque et exercitationem 
                            quo magni earum, sunt, quod veniam repudiandae error. Ducimus?
                        </p>
                    </div>

                    <div className='project-menu'>
                        <button>View Details</button>
                        <button>View Code in Github</button>
                        <button>Open Project</button>
                    </div>
                </div>


                {/* card de prueva 3 */}

                <div className='card'>
                    
                    <h3>
                        Project Unnamed 3
                    </h3>
                    <div className='info-card'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eaque 
                            rem placeat alias modi soluta dolores fugiat enim, atque et exercitationem 
                            quo magni earum, sunt, quod veniam repudiandae error. Ducimus?
                        </p>
                    </div>

                    <div className='project-menu'>
                        <button>View Details</button>
                        <button>View Code in Github</button>
                        <button>Open Project</button>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Project