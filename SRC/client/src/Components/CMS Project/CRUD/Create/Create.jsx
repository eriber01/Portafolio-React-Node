import './Create.css'
import axios from 'axios'
import { useState } from 'react'
import { UseActions } from '../../use-actions.js'
import { ProjectManagement } from '../../../../Services/ProjectManagement'

const Create = () => {
    const [{ state }, actions] = UseActions()
    // console.log(state);
    const [file, setFile] = useState()

    const sendImage = async (e) => {
        e.preventDefault()

        console.log(e);

        // setFile(e.target.files[0]);
        // const formData = new FormData();
        // formData.append('file', file)
        // // const res = await axios.post('/api/image', e.target.files[0])

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let fd = new FormData();
        fd.append('file0', e.target[2].files[0])
        fd.append('file1', e.target[5].files[0])
        fd.append('file2', e.target[7].files[0])
        fd.append('file3', e.target[9].files[0])
        fd.append('n', 'hola mundo')

        // const new1 = {
        //     name:  'hola',
        //     fd: fd
        // }
        const res = await axios.post("/api/createProject", fd, config)


        console.log(res);

        // await ProjectManagement('create', formData)
    }

    console.log(file);
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
                    {
                        // <div className="project-img">
                        //     <label htmlFor="project-img">Project Image</label>
                        //     <input type="file" name="" id="project-img" placeholder='Project Image' />
                        // </div>
                    }

                    {/* here the input of technologies */}

                    <div className='project-info'>
                        <label htmlFor="">Project Technology</label>
                        <select name="selectTechnology" id="" onChange={(e) =>console.log(e.target.value)}>
                            <option value="1">React</option>
                            <option value="2">Node.js</option>
                            <option value="3">Express</option>
                        </select>

                        <label htmlFor="">Descriptions use Technology</label>
                        <input type="text" placeholder='Descriptions use Technology' />

                        <button>Add</button>
                    </div>

                    <button /* onClick={(eve) => {
                        sendImage(eve)
                    }} */>Create Project</button>
                </form>
            </div>
        </div>
    )
}

export default Create