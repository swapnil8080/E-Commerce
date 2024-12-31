import React from 'react'
import footer_icon from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer text-center'>
            <div className="footer-logo">
                <img src={footer_icon} alt="" />
                <p>E-Commerce</p>
            </div>
           <ul className="footer-links list-group list-group-horizontal">
                <li className="list-group list-group-horizontal mx-4">Company</li>
                <li className="list-group list-group-horizontal mx-4">Products</li>
                <li className="list-group list-group-horizontal mx-4">Offices</li>
                <li className="list-group list-group-horizontal mx-4">About</li>
                <li className="list-group list-group-horizontal mx-4">Contact Us</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                    <p>Copyright &copy; 2024 - All Right Reserved </p>
            </div>
        </div>
    )
}

export default Footer
