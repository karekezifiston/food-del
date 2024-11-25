import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
            <div className='footer-content-left'>
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorem quae nesciunt eaque non quis? Voluptas, ratione aspernatur nemo aliquam in esse iste corporis deserunt illo, voluptatibus est numquam eligendi!</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Private Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+250-780-377-645</li>
                <li>Contact@Bunz.com</li>
              </ul>
            </div>
         </div>
         <hr />
         <p className='footer-copyright'>Copyright 2024 © Bunz.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer
