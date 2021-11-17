import React from 'react';
import './Footer.css';


import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



const Footer = () => {
    return (
        <div className="footer">
            <FaTwitterSquare className="icon"/>
            <FaFacebookSquare className="icon"/>
            <FaInstagramSquare className="icon" />
            <FaLinkedin className="icon" />
            <FaGithubSquare className="icon"/>
        </div>
    )
}

export default Footer

