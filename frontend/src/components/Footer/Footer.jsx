import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>En Tomato, combinamos tecnología de vanguardia con un servicio al cliente excepcional para que pedir comida sea más que una simple transacción: sea una experiencia fluida, rápida y satisfactoria. Tu próxima comida favorita, entregada de forma inteligente y eficiente.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-right">
            <h2>EMPRESA</h2>
            <ul>
                <li>Inicio</li>
                <li>Sobre Nosotros</li>
                <li>Delivery</li>
                <li>Politicas de privacidad</li>
            </ul>
        </div>
        <div className="footer-content-center">
            <h2>PONTE EN CONTACTO</h2>
            <ul>+58 424-465-3043</ul>
            <ul>contacto@tomato.com</ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Tomato.com - Todos los derechos reservados</p>
    </div>
  )
}

export default Footer
