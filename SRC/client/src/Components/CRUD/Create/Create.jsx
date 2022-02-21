import './Create.css'

import { UseActions } from './use-actions'

const Create = () => {
    const [{ state }, actions] = UseActions()
    // console.log(state);
    return (
        <div className='create-container'>
            <h1>Create to Project</h1>

            <div className="cms-form--create-container">
                <form className='cms-form-create' action="" /* required ="true" */ >
                    <div className="project-name">
                        <label htmlFor="project-name">Project Name</label>
                        <input onChange={(eve) => actions.getNewProjectData(eve.target.value, 'pName')}
                            type="text" name="" id="project-name" placeholder='Project Name' required = {true}
                            value={state.pName}
                        />
                    </div>

                    <div className="project-info">
                        <label htmlFor="project-info">Project Info</label>
                        <textarea onChange={(eve) => actions.getNewProjectData(eve.target.value, 'pInfo')}
                            name="" id="project-info" placeholder='Project Info' cols="30" rows="10" required = {true}
                            value={state.pInfo}
                        >
                        </textarea>
                    </div>


                    <div className="project-git">
                        <label htmlFor="project-git">Project Git</label>
                        <input onChange={(eve) => actions.getNewProjectData(eve.target.value, 'pGit')}
                            type="text" name="" id="project-git" placeholder='Project Git' required = {true}
                            value={state.pGit}
                        />
                    </div>

                    <div className="project-link">
                        <label htmlFor="project-link">Project Link</label>
                        <input onChange={(eve)=> actions.getNewProjectData(eve.target.value, 'pLink')}
                            type="text" name="" id="project-link" placeholder='Project Link' required = {true}
                            value={state.pLink}
                        />
                    </div>
{
                    // <div className="project-img">
                    //     <label htmlFor="project-img">Project Image</label>
                    //     <input type="file" name="" id="project-img" placeholder='Project Image' />
                    // </div>
                }

                    <button onClick={(eve) => {
                        actions.CreateProject(eve)
                    }}>Create Project</button>
                </form>
            </div>
        </div>
    )
}

export default Create