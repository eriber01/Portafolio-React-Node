// import {useState} from 'react'
import './Contact.css'

import {/*  ToastContainer,  */toast } from 'react-toastify'
import { UseActions } from './use-actions'

const Contact = () => {

    // const notify = () => toast('🦄 Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    // });

    // const click = () =>{
    //     toast.error('asdhgahsdgjashgdjagsdh')
    // }

    const [{ state }, actions] = UseActions()

    return (
        <div className='contact-container' id='contact'>

            <h1>Contact Me</h1>
            {/* <button onClick={click}>click</button> */}
            <div className='contact'>
                <div className='form-container'>
                    <h3>Send a Message</h3>
                    <form onSubmit={(eve) => actions.SendMessage(eve) /* MessageManage(eve) */} action="" autoComplete='off'>
                        <div className='input-full-name'>
                            <div className='name-container'>
                                <label htmlFor="name">First Name</label>
                                <input onChange={(eve) => {
                                    actions.onChange(eve.target.value, 'name')
                                }}
                                    className='name' //required={true} 
                                    placeholder='Example: Juan' type="text"
                                    name="" id="name"
                                    value={state?.name}
                                />
                            </div>

                            <div className="last-name-container">
                                <label htmlFor="last-name">Last Name</label>
                                <input onChange={(eve) => {
                                    actions.onChange(eve.target.value, 'lastname')
                                }}
                                    className='last-name' //required={true} 
                                    placeholder='Example: Perez' type="text"
                                    name="" id="last-name"
                                    value={state?.lastname}
                                />
                            </div>
                        </div>

                        <div className='input-contact'>
                            <div className="email-container">
                                <label htmlFor="email">Email</label>
                                <input onChange={(eve) => {
                                    actions.onChange(eve.target.value, 'email')
                                }}
                                    className='email' //required={true} 
                                    placeholder='Example: email@email.com'
                                    type="email" name="" id="email"
                                    value={state?.email}
                                />
                            </div>

                            <div className="phone-container">
                                <label htmlFor="telephone">Telephone</label>
                                <input onChange={(eve) => {
                                    actions.onChange(eve.target.value, 'phone')
                                }}
                                    className='telephone' //required={true} 
                                    placeholder='Phone Number' name=""
                                    type="tel" id="telephone"
                                    value={state?.phone}
                                />
                            </div>
                        </div>

                        <div className='message'>
                            <label htmlFor="message">Message</label>
                            <textarea onChange={(eve) => {
                                actions.onChange(eve.target.value, 'message')
                            }}
                                name="" //required={true} 
                                placeholder='Write you Message here' ols="30" rows="10"
                                id="message"
                                value={state?.message}
                            ></textarea>
                        </div>

                        <button className='send-message'>Send</button>
                    </form>
                </div>

                <div className='contact-data-container'>
                    <div className='contact-data'>
                        <h3>Contact Information</h3>

                        <div className='address'>
                            <div className="address-ico">
                                <ion-icon name="location"></ion-icon>
                            </div>
                            <span>Carretera Mella, El Tamarindo, Santo Domingo Este </span>
                        </div>
                        <div className='my-email'>
                            <div className="mail-ico">
                                <ion-icon name="mail-unread"></ion-icon>
                            </div>
                            <span>eriber01@gmail.com</span>
                        </div>
                        <div className='cel-phone'>
                            <div className="cel-ico">
                                <ion-icon name="call"></ion-icon>
                            </div>
                            <span>Cel: 809-433-9691</span>
                        </div>

                        <div className='red-social'>
                            <a href="https://web.facebook.com/eriber.tejedaamparo" target='_blank'><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="https://www.instagram.com/eribertejeda/" target='_blank'><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="https://www.linkedin.com/in/eriber-tejeda-amparo-7a495614a" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
                            <a href="https://github.com/eriber01" target='_blank'><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>

                    <div className='contact-location'>
                        <iframe className='map' title='goole map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7787.
                            74054056543!2d-69.83120544692837!3d18.528026872092802!2m3!1f0!2f0!3f0!
                            3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s%2B18.528237-069.828359!
                            5e0!3m2!1ses-419!2sdo!4v1633902232856!5m2!1ses-419!2sdo" loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact