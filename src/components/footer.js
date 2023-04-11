import React, { useState } from 'react';

import { ImFacebook, ImTwitter } from 'react-icons/im';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

import '../css/App.css';
import '../css/footer.css';

const Footer = () => {

    const [activeMap, turnAM] = useState(1);
    const Pa    = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.420293798129!2d-46.6402765!3d-23.589255100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a28477cecf7%3A0xc0388180c7a2328b!2sFaculdade%20Belas%20Artes%20-%20Campus%20Vila%20Mariana!5e0!3m2!1spt-BR!2sbr!4v1681236942057!5m2!1spt-BR!2sbr";
    const VM    = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4177885930967!2d-46.640358500000005!3d-23.589344999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a283e5a69fb%3A0x7cae72bbbdab3036!2sRua%20Dr.%20%C3%81lvaro%20Alvim%2C%2090%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004018-010!5e0!3m2!1spt-BR!2sbr!4v1681239962062!5m2!1spt-BR!2sbr";
    const SCJ   = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1512574989897!2d-46.697603199999996!3d-23.598907699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5730648f80a7%3A0xf89e72eac29f3838!2sShopping%20Cidade%20Jardim!5e0!3m2!1spt-BR!2sbr!4v1681240080562!5m2!1spt-BR!2sbr";
    const SV    = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.9677811033966!2d-47.467387!3d-23.5336612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a6f3a0ffb01%3A0xb9140afb3a06edfd!2sFaculdade%20Belas%20Artes%20-%20Campus%20Sorocaba-Votorantim!5e0!3m2!1spt-BR!2sbr!4v1681240109031!5m2!1spt-BR!2sbr";

    return ( 
        <>
            <ul className='flex-row footer-container'>
                <li className='flex-column temp'>
                    <span>Links</span>
                    <div className='flex-column'>    
                        <a target='_blank' rel='noopener' className='f-anchor'>Fale conosco</a>
                        <a target='_blank' rel='noopener' className='f-anchor'>FAQ</a>
                        <a target='_blank' rel='noopener' href='https://www.belasartes.br/institucional/' className='f-anchor'>Quem nós somos?</a>
                    </div>
                </li>
                <li className='flex-column temp'>
                    <span>Acompanhe as novidades</span>
                    <div className='flex-row socials'>
                        <a target='_blank' rel='noopener' href='https://www.facebook.com/belasartes' className='f-anchor'><ImFacebook  className='icons'/></a>
                        <a target='_blank' rel='noopener' href='https://twitter.com/belasartes' className='f-anchor'><ImTwitter  className='icons'/></a>
                        <a target='_blank' rel='noopener' href='https://www.instagram.com/belasartes/' className='f-anchor'><BsInstagram  className='icons'/></a>
                        <a target='_blank' rel='noopener' href='https://www.linkedin.com/school/belasartessp/' className='f-anchor'><BsLinkedin  className='icons'/></a>
                    </div>
                </li>
                <li className='flex-column temp'>
                    <span>Serviço e Privacidade</span>
                    <div className='flex-column'>                    
                        <a target='_blank' rel='noopener' className='f-anchor'>Termos de Serviços</a>
                        <a target='_blank' rel='noopener' className='f-anchor'>Termos de privacidade</a>
                    </div>
                </li>
                <li className='flex-column temp'>
                    <span>Localização Campus</span>
                    <div className='flex-row map-container'>
                        <div className=' flex-column fb-container'>
                            <button className='f-button' onClick={() => { turnAM(1) }}>Paraíso</button>
                            <button className='f-button' onClick={() => { turnAM(2) }}>Vila Mariana</button>
                            <button className='f-button' onClick={() => { turnAM(3) }}>Shop. Cidade Jardim</button>
                            <button className='f-button' onClick={() => { turnAM(4) }}>Sorocaba-Votorantim</button>
                        </div>
                        <iframe src={Pa}  className={ activeMap === 1 ? 'footer-map' : 'display-none'} loading="lazy" ></iframe>
                        <iframe src={VM}  className={ activeMap === 2 ? 'footer-map' : 'display-none'} loading="lazy" ></iframe>
                        <iframe src={SCJ} className={ activeMap === 3 ? 'footer-map' : 'display-none'} loading="lazy" ></iframe>
                        <iframe src={SV}  className={ activeMap === 4 ? 'footer-map' : 'display-none'} loading="lazy" ></iframe>
                    </div>
                </li>
            </ul>
        </>
     );
}
 
export default Footer;