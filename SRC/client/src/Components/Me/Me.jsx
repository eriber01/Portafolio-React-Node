import React from 'react'
import './Me.css'


export default function Me() {
    
    
    return (
        <div className='me-container' id='me'>
            <h1>About Me</h1>

            <div className='me-card-container'>
                <div className='me'>
                    <h3>Me</h3>
                    <p>Soy una persona apacionada con lo que le gusta, amante de los video juegos, algo timida con las personas cuando
                        no las conozco, pero super amable y sociable cuando obtengo su confianza y conecto con ellos.
                        <br/><br />
                        Me gusta siempre dar mi punto de vista sobre las cosas, y estar siempre al corriente de cuales son mis responsabilidades,
                        y las cosas que debo y tengo que hacer en mi trabajo.
                    </p>
                </div>
                
                <div className='me-card-tec'>
                    <div className='backend'>
                        <h3>BackEnd</h3>
                        <p>Soy BackEnd en Node.js, eh trabajado con tecnologias como <strong>Express</strong> para el servidor, <strong>NodeMailer </strong>
                            para el envio de Emails, <strong>MongoDB</strong> como base de datos.
                            <br /><br />
                            Tambien eh trabajado con <strong>Passport.js </strong>
                            para la autentificacion tanto local como con Google Auth, y para la subida de imagenes se trabajar con el servisio de <strong>Cloudinary </strong>
                            y <strong>Ejs.js para la carga de datos del Backend en el DOM</strong>.
                        </p>
                    </div>
                
                    <div className='frontend'>
                        <h3>FrontEnd</h3>
                        <p>Tengo experiencia trabajando con <strong>React.js</strong> para el manejo de interfaces de usuario, para base de datos y la
                            autentificacion trabajo con <strong> Firebase</strong> para el manejo de las rutas uso <strong>React Router DOM </strong>
                            y Fetch para hacer peticiones y enviar y recibir datos del BackEnd en Node.js.

                            <br /><br />
                            Tambien se tengo experiencia con <strong>BootStrap </strong> tanto con React como con una web statica normal.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
