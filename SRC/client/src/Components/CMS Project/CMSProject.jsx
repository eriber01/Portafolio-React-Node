import { useEffect, useState } from 'react'
import { auth } from '../../Services/FirebaseConfig'
import Page404 from '../404 Page/404-Page'
import Create from '../CRUD/Create/Create'

import './CMSProject.css'

const CMSProject = () => {

    const [LoginState, setLoginState] = useState(null)
    const [Cmsstate, setCmsstate] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log('is authenticate');
                setLoginState(user.email)
            } else {
                console.log('is not login');
            }
        })
    }, [])




    const LogOut = () => {
        auth.signOut()
    }

    return (
        <div>
            {
                LoginState ?
                    (
                        <div className="cms-container">
                            <header className='cms-header'>
                                <nav className="cms-nav">
                                    <ul>
                                        <li><a href="/">HOME</a></li>
                                        <li><a onClick={LogOut} href="/login">LogOut</a></li>
                                    </ul>
                                </nav>
                            </header>
                            
                            <div className='cms-menu-display'>

                                <div className="cms-option-menu">
                                    {<img className='cms-img-me' src="img/min-img-me.jpg" alt="" />}
                                    <div className="cms-nav-options">
                                        <ul>
                                            <li>Create</li>
                                            <li>Update</li>
                                            <li>Delete</li>
                                        </ul>
                                    </div>
                                </div>


                                <div className='Crud-display'>
                                    <Create />
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