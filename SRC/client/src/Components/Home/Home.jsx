import {useEffect} from 'react'
import './Home.css'
import axios from 'axios'


const Home = ()=> {
    
    useEffect(() => {
        axios({
            method: 'get',
            url: '/api',
            responseType: 'stream'
        })
        .then((response) =>{
            console.log(response.data);
        })
    }, [])
    
    return (
        <div className='app-container'>
            <div className='home-container'>
                <header className='header'>
                    <nav className='nav'>
                        <ul>
                            <li><a href="#me">Me</a></li>
                            <li><a href="#skill">Skill</a></li>
                            <li className='home'><a href="/">HOME</a></li>
                            <li><a href="#project">Project</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    
                    <div className='title'>
                        <h1>Eriber Tejeda Amparo</h1>
                        <h3>JavaScript FullStack Developer</h3>
                    </div>

                    <div className="img-me">
                        <span>"Esta imagen es temporal claro que se cambiara"</span>
                        <img src="img/img-me.jpg" alt="" />
                    </div>
                    <div className='desCV'>
                        <button><a href="file/Min Eriber Tejeda CV.pdf" target='_blank'>Downloaded CV</a></button>
                    </div>
                </header>
                
            </div>
        </div>
    )
}

export default Home