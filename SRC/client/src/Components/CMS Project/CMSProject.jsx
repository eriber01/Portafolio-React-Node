import {useEffect, useState} from 'react'
import {auth} from '../../Services/FirebaseConfig'

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

    const l = ()=>{
        auth.signOut()
    }

    return(
        <div>
            {
                LoginState ? 
                    (
                        <h1>CMS Project</h1>
                    )
                    :
                    (
                        <h1>No tienes Acceso</h1>
                    )
            }

            <button onClick={l}>hola</button>
        </div>
        
    )
}

export default CMSProject