import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import userImage from '../images/user.svg';
import './UserInfo.css';


import React from 'react'

const UserInfo = () => {
    return (
        <div className="userInfo">
            <img src={userImage} alt="" />
            <div className="userInfo_bottom">
            <div className="userInfo_body">
                <h3>Laura Smith</h3>
                <span className="userInfo_body__dev">Frontend Developer</span>
                <a href="/">laurasmith.website</a>
            </div>
            <div className="userInfo_buttons">
                <button className="light-btn">
                    <FaEnvelope className="icon"/>
                    Email
                </button>
                <button className="blue-btn">
                    <FaLinkedin className="icon"/>
                    Linkedin
                </button>
            </div>
            </div>
           
        </div>

    )
}

export default UserInfo; 




