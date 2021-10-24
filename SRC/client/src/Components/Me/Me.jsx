import React, {useContext, useState, useEffect} from 'react'
import './Me.css'

import ScrollContext from '../../context/ScrollContext'

const Me = ()=> {
    const context = useContext(ScrollContext)
    
    const [ClassState, setClassState] = useState(['me'])

    const HandleAnimation = (scroll)=>{
        if (scroll.ScrollData >= 700) {
            console.log(scroll.ScrollData);

            setClassState('move-all')
        }
    }

    useEffect(() => {
        HandleAnimation(context)
    }, [context])

    return (
        <div className='me-container' id='me'>
            <h1>About Me</h1>

            <div className='me-card-container'>
                <div className={`me ${ClassState}`} >
                    <h3>Me</h3>
                    <p>I am a passionate person with what he likes, a lover of video games, 
                        somewhat shy with people when I do not know them, but super friendly 
                        and sociable when I gain their trust and connect with them.
                        <br/><br />
                        I always like to give my point of view on things, and always be 
                        aware of what my responsibilities are, and the things that I should and 
                        have to do in my work.
                    </p>
                </div>
                
                <div className='me-card-tec'>
                    <div className={`backend ${ClassState}`}>
                        <h3>BackEnd</h3>
                        <p>I am a BackEnd in Node.js, I have worked with technologies such as <strong> Express </strong> for the server, <strong> NodeMailer </strong>
                            for sending Emails, <strong> MongoDB </strong> as a database.
                            <br /><br />
                            I have also worked with <strong> Passport.js </strong>
                            For both local authentication and with Google Auth, and for the uploading of images, it will work with the <strong> Cloudinary </strong> service.
                            and <strong> Ejs.js for loading data from the Backend into the DOM </strong>.
                        </p>
                    </div>
                
                    <div className={`frontend ${ClassState}`}>
                        <h3>FrontEnd</h3>
                        <p>I have experience working with <strong> React.js </strong> for handling user interfaces, for databases and
                            Authentication I work with <strong> Firebase </strong> to manage routes, use <strong> React Router DOM </strong>
                            and Fetch to make requests and send and receive BackEnd data in Node.js.

                        <br /> <br />
                            I also have experience with <strong> BootStrap </strong> both with React and with a normal static web.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Me