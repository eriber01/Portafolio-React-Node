import {useHistory} from 'react-router-dom'
import './404-Page.css'

const Page404 = ()=> {

    const history = useHistory()

    return (
        <div className='page404'>
            <div className="page404-container">
                <nav className='page404-nav'>
                    <ul>
                        <li><a href="/">HOME</a></li>

                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>

                <div className='page404-body'>
                    <div className='page404-text'>
                        
                        <div className="text-head">
                            <h1>Page <br /> not Found</h1>
                            <h3>Hmmm! You shouldn't be here</h3>
                        </div>
                        
                        <div className="text-body">
                            <span className='span1'>This is the Content management system of Eriber Tejeda's portfolio and only he has access.</span>
                            <span className='span2'>If you want to know how it works or want to talk to him then go to the HOME Page and send him an email.</span>
                            <span className='span3'>"That action is at the bottom of the page" </span>

                            <span className='span-eriber'><strong>Are you Eriber! Playing with the routes again?</strong></span>

                            <a href='/login' onClick={() => history.push('/login')} className='page404-btn-login'><strong>LOGIN</strong></a>
                        </div>
                    </div>
                
                    <div className='img-404'>
                        <img src="img/404.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404