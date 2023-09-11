import React from 'react'

export default function Info() {
    return (
        <header className='header'>
            <img className='avatar' src='../images/image.jpg' alt='avatar' />
            <div className='container' >
                <h1 className='name' >Hasan H. Özbakır</h1>
                <h3 className='job-title' >Frontend Developer</h3>
                <a className='personal-site-link' href='#' target="_blank" >my-site-not-ready-yet.website</a>
                <div className='btn-container'>
                    <a href="mailto:hasan.h.ozbakir@gmail.com" className="btn btn-email"><img src='../images/mail.png' target="_blank" />Email</a>
                    <a href="https://www.linkedin.com/in/hasan-huseyin-ozbakir/" className="btn btn-linkedin" target="_blank" ><img src='../images/linkedin.png' />Linkedin</a>
                </div>
            </div>
        </header>
    )
}