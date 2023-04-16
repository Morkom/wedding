import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"

 const ContactUs = () => {
    const form = useRef();
    
    const[data, setData] = useState([{}])
    useEffect(()=>{
    fetch("/members").then(
      res => res.json()
    ).then(data => {
      setData(data)
      console.log(data)
    })
    }, [])

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(data["service"], data["template"], form.current, data["public_key"])
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form className="app__specialMenu" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  };

  export default ContactUs