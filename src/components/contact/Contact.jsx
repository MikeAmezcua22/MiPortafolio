import React, {useRef, useState, useContext} from 'react'

import "./contact.css"
import Phone from "../../Img/phone.png"
import Email from "../../Img/email.png"
import Address from "../../Img/address.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from '../context'

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkmode


    const  handleSubmit = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_j0bn0ot', 'template_te9ogub',  formRef.current, 'user_CCWNK2eWLOaOZEt88H3NP')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

        
    }


    return (
        <div className="c">
           <div className="c-bg"></div> 
           <div className="c-wrapper">
               <div className="c-left">
                   <h1 className="c-title">Let's discuss your project</h1>
                   <div className="c-info">
                       <div className="c-info-item">
                           <img 
                                src={Phone} 
                                alt=""
                                className="c-icon" 
                            />
                            +52 314 87 26 003
                       </div>

                       <div className="c-info-item">
                           <img 
                                src={Email} 
                                alt=""
                                className="c-icon" 
                            />
                            miguel_22_t@hotmail.com
                       </div>

                       <div className="c-info-item">
                           <img 
                                src={Address} 
                                alt=""
                                className="c-icon" 
                            />
                           Monterrey N.L. 
                       </div>

                   </div>
               </div>
               <div className="c-right">
                   <p className="c-desc">
                        <b>What's your story</b>Loem ipsum dolor sit amet consectetur adipisicing elit. Neque ab illum necessitatibus quae optio. Accusantium explicabo rem, unde consectetur doloremque totam saepe dolorum perspiciatis? 
                        Fugiat atque accusantium animi qui dolorem.
                   </p>

                   <form ref={formRef} onSubmit={handleSubmit}>
                       <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder="Name" name="user_name" />
                       <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder="Subject" name="user_subject" />
                       <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder="Email" name="user_email" />
                       <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                       <button>Enviar</button>
                       {done && "Gracias"}
                   </form>
               </div>
           </div>
        </div>
    )
}

export default Contact
