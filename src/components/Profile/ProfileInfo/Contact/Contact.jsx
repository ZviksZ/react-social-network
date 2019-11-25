import React                  from 'react';
import s                      from './../ProfileInfo.module.css';

const Contact = ({contactTitle, contactValue}) => {
    return (
        <li>
            <span>{contactTitle}</span> -
            <a href={contactValue} target="_blank">
                {contactValue}
            </a>
        </li>
    )
}


export default Contact;