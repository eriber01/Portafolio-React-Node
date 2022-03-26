// import { useEffect, useState } from 'react'
// import { auth } from '../../Services/FirebaseConfig'
import Page404 from '../404 Page/404-Page'
// import Create from '../CRUD/Create/Create'
// import Delete from '../CRUD/Delete/Delete'
// import Update from '../CRUD/Update/Update'
import { UseActions } from './use-actions'
import './CMSProject.css'

const CMSProject = () => {
    const [{ state }, actions] = UseActions()

    return (
        <div>
            {
                state?.authenticate ?
                    (
                        <div className="cms-container">
                            <header className='cms-header'>
                                <nav className="cms-nav">
                                    <ul>
                                        <li><a href="/">HOME</a></li>
                                        <li><a onClick={actions.LogOut} href="/login">LogOut</a></li>
                                    </ul>
                                </nav>
                            </header>

                            <div className='cms-menu-display'>

                                <div className="cms-option-menu">
                                    {<img className='cms-img-me' src="img/min-img-me.jpg" alt="" />}
                                    <div className="cms-nav-options">
                                        <ul>
                                            <li onClick={() => actions.onChange('create', 'crud')}>Create</li>
                                            <li onClick={() => actions.onChange('update', 'crud')}>Update</li>
                                            <li onClick={() => actions.onChange('delete', 'crud')}>Delete</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='Crud-display'>
                                    {
                                        actions.crudSelected(state.crud)
                                    }
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <Page404 />
                    )
            }

        </div>

    )
}

export default CMSProject