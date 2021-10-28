
import './ProjectPage.css'

const ProjectPage = () =>{

    return (
        <div className='project-container'>
            <nav className='nav-container'>
                <ul>
                    <li><a href="/">HOME</a></li>
                </ul>
            </nav>
            <h1>Project Name</h1>
            <div className='project-details-container'>
                
                <div className='project-image'>
                    <img src="img/ejercitate.JPG" alt="" />
                </div>

                <div className='project-description'>

                    <h2>Description Project</h2>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, dicta. Sint dolorum velit, blanditiis nesciunt magnam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, dicta. Sint dolorum velit, blanditiis nesciunt magnam.
                    </p>
                    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, dicta. Sint dolorum velit, blanditiis nesciunt magnam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, dicta. Sint dolorum velit, blanditiis nesciunt magnam.
                    </p>
                    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, dicta. Sint dolorum velit, blanditiis nesciunt magnam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, dicta. Sint dolorum velit, blanditiis nesciunt magnam.
                    </p>
                </div>
            </div>

            <div className='tec-project'>

                <div className='tec-text-container'>
                    <h2 className='tec-text'>Project Technologist</h2>
                </div>

                <div className='tec-card-container'>
                    <div className='tec-project-card'>
                        <img className='img-tec' src="img/nodejs.png" alt="" />

                        <div className='tec-use'>
                        <h4>Tec Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt perferendis</p>
                        </div>
                    </div>

                    <div className='tec-project-card'>
                        <img className='img-tec' src="img/react.png" alt="" />

                        <div className='tec-use'>
                            <h4>Tec Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt perferendis</p>
                        </div>
                    </div>

                    <div className='tec-project-card'>
                        <img className='img-tec' src="img/firebase.png" alt="" />

                        <div className='tec-use'>
                            <h4>Tec Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt perferendis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProjectPage