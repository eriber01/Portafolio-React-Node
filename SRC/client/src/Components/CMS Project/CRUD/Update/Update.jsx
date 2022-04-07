

import './Update.css'

const Create = ()=>{



    return(
        <div className='create-container'>
            <h1>Update to Project</h1>

            <div className="cms-form--create-container">
                <form className='cms-form-create' action="">
                    <div className="project-name">
                        <label htmlFor="project-name">Project Name</label>
                        <input type="text" name="" id="project-name" placeholder='Project Name'/>
                    </div>
                    
                    <div className="project-info">
                        <label htmlFor="project-info">Project Info</label>
                        <textarea name="" id="project-info" placeholder='Project Info' cols="30" rows="10"></textarea>
                    </div>

                    
                    <div className="project-git">
                        <label htmlFor="project-git">Project Git</label>
                        <input type="text" name="" id="project-git" placeholder='Project Git'/>
                    </div>
                    
                    <div className="project-link">
                        <label htmlFor="project-link">Project Link</label>
                        <input type="text" name="" id="project-link" placeholder='Project Link'/>
                    </div>

                    <div className="project-img">
                        <label htmlFor="project-img">Project Image</label>
                        <input type="file" name="" id="project-img" placeholder='Project Image'/>
                    </div>

                    <button>Create Project</button>
                </form>
            </div>
        </div>
    )
}

export default Create