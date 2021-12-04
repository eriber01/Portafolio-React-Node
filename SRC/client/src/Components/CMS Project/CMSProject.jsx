import {useEffect, useState} from 'react'
import {auth} from '../../Services/FirebaseConfig'
import Page404 from '../404 Page/404-Page'

const CMSProject = ()=>{

    const [LoginState, setLoginState] = useState(null)

    useEffect(() => {   
        auth.onAuthStateChanged( async (user)=>{
            if(user){
                console.log('is authenticate');
                setLoginState(user.email)
            }else{
                console.log('is not login');
            }
        })
    }, [])

/*     const l = ()=>{
        auth.signOut()
    } */

    return(
        <div>
            {
                LoginState ? 
                    (
                        <h1>Cms page</h1>
                        
                    )
                    :
                    (
                        <Page404/>
                    )
            }
            
        </div>
        
    )
}

export default CMSProject