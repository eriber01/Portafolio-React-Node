import './Create.css'
import { UseActions } from '../../use-actions.js'
// import { ProjectManagement } from '../../../../Services/ProjectManagement'
import TechTable from '../components/techTable'

const Create = () => {
    const [{ state }, actions] = UseActions()

    return (
        <div className='create-container'>
            <h1>Create to Project</h1>

            <div className="cms-form--create-container">
                <form className='cms-form-create' onSubmit={(eve) => /* sendImage(eve) */ actions.onSave(eve)} encType=' multipart/form-data' action="" /* required ="true" */ >
                    <div className="project-name">
                        <label htmlFor="project-name">Project Name</label>
                        <input onChange={({ target: { value } }) => actions.onChange(value, 'projectName')}
                            type="text" name="" id="project-name" placeholder='Project Name' /* required={true} */
                            value={state.projectName}
                        />
                    </div>

                    <div className="project-info">
                        <label htmlFor="project-info1">Project Descriptions</label>
                        <textarea onChange={({ target: { value } }) => actions.onChange(value, 'projectDescription1')}
                            name="" id="project-info1" placeholder='Project Info 1' cols="30" rows="10" /* required={true} */
                            value={state.projectDescription1}
                        >
                        </textarea>
                    </div>

                    <div className="project-info">
                        <label htmlFor="project-info2">Project Descriptions</label>
                        <textarea onChange={({ target: { value } }) => actions.onChange(value, 'projectDescription2')}
                            name="" id="project-info2" placeholder='Project Info 2' cols="30" rows="10" /* required={true} */
                            value={state.projectDescription2}
                        >
                        </textarea>
                    </div>

                    <div className="project-info">
                        <label htmlFor="project-info3">Project Descriptions</label>
                        <textarea onChange={({ target: { value } }) => actions.onChange(value, 'projectDescription3')}
                            name="" id="project-info3" placeholder='Project Info 3' cols="30" rows="10" /* required={true} */
                            value={state.projectDescription3}
                        >
                        </textarea>
                    </div>

                    <div className="project-img">
                        <label htmlFor="project-img">Project Image Descriptions</label>
                        <input type="file" name="file0"
                            onChange={(e) => actions.onChange(e, 'file0', true, 'file0Validate', 2)}
                            id="project-img" placeholder='Project Image'
                        />
                    </div>

                    <div className="project-info">
                        <label htmlFor="project-info">Project Resume</label>
                        <textarea onChange={({ target: { value } }) => actions.onChange(value, 'projectResume')}
                            name="" id="project-info" placeholder='Project Resume' cols="30" rows="10" /* required={true} */
                            value={state.projectResume}
                        >
                        </textarea>
                    </div>

                    {/* Details Project Data 1 */}
                    <div className="project-info">
                        <label htmlFor="project-info">Project Details 1</label>
                        <textarea onChange={({ target: { value } }) => actions.onChange(value, 'textProjectDetails1')}
                            name="" id="project-info" placeholder='Project Resume' cols="30" rows="10" /* required={true} */
                            value={state.textProjectDetails1}
                        >
                        </textarea>
                    </div>

                    <div className="project-img">
                        <label htmlFor="project-img">Project Image 1</label>
                        <input
                            onChange={(e) => actions.onChange(e, 'file1', true, 'file1Validate', 5)}
                            type="file" name="file1" id="project-img" placeholder='Project Image'
                        />
                    </div>

                    {/* Details Project Data 2 */}
                    <div className="project-info">
                        <label htmlFor="project-info">Project Details 2</label>
                        <textarea onChange={({ target: { value } }) => actions.onChange(value, 'textProjectDetails2')}
                            name="" id="project-info" placeholder='Project Resume' cols="30" rows="10" /* required={true} */
                            value={state.textProjectDetails2}
                        >
                        </textarea>
                    </div>

                    <div className="project-img">
                        <label htmlFor="project-img">Project Image 2</label>
                        <input
                            onChange={(e) => actions.onChange(e, 'file2', true, 'file2Validate', 7)}
                            type="file" name="file2" id="project-img" placeholder='Project Image' />
                    </div>

                    {/* Details Project Data 3 */}
                    <div className="project-info">
                        <label htmlFor="project-info">Project Details 3</label>
                        <textarea onChange={({ target: { value } }) => actions.onChange(value, 'textProjectDetails3')}
                            name="" id="project-info" placeholder='Project Resume' cols="30" rows="10" /* required={true} */
                            value={state.textProjectDetails3}
                        >
                        </textarea>
                    </div>

                    <div className="project-img">
                        <label htmlFor="project-img">Project Image 3</label>
                        <input
                            onChange={(e) => actions.onChange(e, 'file3', true, 'file3Validate', 9)}
                            type="file" name="file3" id="project-img" placeholder='Project Image' />
                    </div>

                    <div className="project-git">
                        <label htmlFor="project-git">Project Git</label>
                        <input onChange={({ target: { value } }) => actions.onChange(value, 'linkCode')}
                            type="text" name="" id="project-git" placeholder='Project Git' /* required={true} */
                            value={state.linkCode}
                        />
                    </div>

                    <div className="project-link">
                        <label htmlFor="project-link">Project Link</label>
                        <input onChange={({ target: { value } }) => actions.onChange(value, 'linkLocation')}
                            type="text" name="" id="project-link" placeholder='Project Link' /* required={true} */
                            value={state.linkLocation}
                        />
                    </div>

                    {/* here the input of technologies */}

                    <div className='project-info'>
                        <label htmlFor="">Project Technology</label>

                        <div>
                            <select name="selectTechnology"
                                value={state.techSelectedId || ''}
                                onChange={({ target: { value } }) =>
                                    actions.onChange(value, 'techSelectedId')
                                }
                            >

                                <option disabled hidden value={''}>
                                    Select one Tech
                                </option>
                                {
                                    state.selectData.map(item =>

                                        <option
                                            key={item._id} value={item._id}
                                        >
                                            {item.techName}
                                        </option>

                                    )
                                }

                            </select>


                            <label htmlFor="">Descriptions use Technology</label>
                            <input type="text"
                                value={state.techDescriptions}
                                placeholder='Descriptions use Technology'
                                onChange={({ target: { value } }) => actions.onChange(value, 'techDescriptions')}
                            />

                            <button onClick={(e) => actions.addTechCache(e)}>Add</button>
                        </div>

                        <div>
                            <TechTable data={state.selectedTech} actions={actions} />
                        </div>
                    </div>

                    <button>Create Project</button>
                </form>
            </div>
        </div>
    )
}

export default Create