import './Create.css'

import { UseActions } from '../../use-actions.js'

const Create = () => {
    const [{ state }, actions] = UseActions()
    console.log(state);
    return (
        <div className='create-container'>
            <h1>Create to Project</h1>

            <div className="cms-form--create-container">
                <form className='cms-form-create' action="" /* required ="true" */ >
                    <div className="project-name">
                        <label htmlFor="project-name">Project Name</label>
                        <input onChange={(eve) => actions.onChange(eve.target.value, 'projectName')}
                            type="text" name="" id="project-name" placeholder='Project Name' required={true}
                            value={state.projectName}
                        />
                    </div>

                    <div className="project-info">
                        <label htmlFor="project-info">Project Descriptions</label>
                        <textarea onChange={(eve) => actions.onChange(eve.target.value, 'projectDescription')}
                            name="" id="project-info" placeholder='Project Info' cols="30" rows="10" required={true}
                            value={state.projectDescription}
                        >
                        </textarea>
                    </div>

                    <div className="project-info">
                        <label htmlFor="project-info">Project Resume</label>
                        <textarea onChange={(eve) => actions.onChange(eve.target.value, 'projectResume')}
                            name="" id="project-info" placeholder='Project Resume' cols="30" rows="10" required={true}
                            value={state.projectResume}
                        >
                        </textarea>
                    </div>

                    {/* Details Project Data 1 */}
                    <div className="project-info">
                        <label htmlFor="project-info">Project Details 1</label>
                        <textarea onChange={(eve) => actions.onChange(eve.target.value, 'textProjectDetails1')}
                            name="" id="project-info" placeholder='Project Resume' cols="30" rows="10" required={true}
                            value={state.projectResume}
                        >
                        </textarea>
                    </div>

                    <div className="project-img">
                        <label htmlFor="project-img">Project Image 1</label>
                        <input type="file" name="" id="project-img" placeholder='Project Image' />
                    </div>

                    {/* Details Project Data 2 */}
                    <div className="project-info">
                        <label htmlFor="project-info">Project Details 2</label>
                        <textarea onChange={(eve) => actions.onChange(eve.target.value, 'textProjectDetails2')}
                            name="" id="project-info" placeholder='Project Resume' cols="30" rows="10" required={true}
                            value={state.projectResume}
                        >
                        </textarea>
                    </div>

                    <div className="project-img">
                        <label htmlFor="project-img">Project Image 2</label>
                        <input type="file" name="" id="project-img" placeholder='Project Image' />
                    </div>

                    {/* Details Project Data 3 */}
                    <div className="project-info">
                        <label htmlFor="project-info">Project Details 3</label>
                        <textarea onChange={(eve) => actions.onChange(eve.target.value, 'textProjectDetails2')}
                            name="" id="project-info" placeholder='Project Resume' cols="30" rows="10" required={true}
                            value={state.projectResume}
                        >
                        </textarea>
                    </div>

                    <div className="project-img">
                        <label htmlFor="project-img">Project Image 3</label>
                        <input type="file" name="" id="project-img" placeholder='Project Image' />
                    </div>

                    <div className="project-git">
                        <label htmlFor="project-git">Project Git</label>
                        <input onChange={(eve) => actions.onChange(eve.target.value, 'linkCode')}
                            type="text" name="" id="project-git" placeholder='Project Git' required={true}
                            value={state.linkCode}
                        />
                    </div>

                    <div className="project-link">
                        <label htmlFor="project-link">Project Link</label>
                        <input onChange={(eve) => actions.onChange(eve.target.value, 'linkLocation')}
                            type="text" name="" id="project-link" placeholder='Project Link' required={true}
                            value={state.linkLocation}
                        />
                    </div>
                    {
                        // <div className="project-img">
                        //     <label htmlFor="project-img">Project Image</label>
                        //     <input type="file" name="" id="project-img" placeholder='Project Image' />
                        // </div>
                    }

                    <button onClick={(eve) => {
                        actions.onSave(eve)
                    }}>Create Project</button>
                </form>
            </div>
        </div>
    )
}

export default Create