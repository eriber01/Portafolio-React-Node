import './Home.css'

import {useState} from 'react'
import { useHistory } from 'react-router' 

const Home = ()=> {
    
    const history = useHistory()
    const [ClassState, setClassState] = useState('NoView-mobil-menu')
    const [IcoName, setIcoName] = useState('menu-outline')

    const LinkLogin = ()=>{
        history.push('/login')
    }

    const MobilMenu = ()=>{
        console.log('hello');

        if(ClassState === 'NoView-mobil-menu'){
            setClassState('view-mobil-menu')
            setIcoName('close-outline')
        }else{
            setClassState('NoView-mobil-menu')
            setIcoName('menu-outline')
        }

        console.log(ClassState);
    }

    

    return (
        <div className='app-container'>
            <div className='home-container'>
                <header className='header'>
                    <nav className='nav'>
                        <div className='nav-mobil'>
                            <ion-icon onClick={MobilMenu} name={IcoName}></ion-icon>
                        </div>
                        <ul className={ClassState}>
                            <li><a href="#me">Me</a></li>
                            <li><a href="#skill">Skill</a></li>
                            <li className='home'><a href="/">HOME</a></li>
                            <li><a href="#project">Project</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                <div className="home-info">
                    <div className='title'>
                        <h1>Eriber Tejeda Amparo</h1>
                        <h3>JavaScript FullStack Developer</h3>

                        <div className='login-btn-container'>
                            <button onClick={LinkLogin} className='login-btn'>Login</button>
                        </div>
                    </div>

                    <div className="img-me">
                        <span>"Esta imagen es temporal claro que se cambiara"</span>
                        <img src="img/img-me.jpg" alt="" />
                    </div>
                    <div className='desCV'>
                        <button ><a href="file/CV Ingles Eriber Tejeda Amparo.pdf" target='_blank'>Downloaded CV</a></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home