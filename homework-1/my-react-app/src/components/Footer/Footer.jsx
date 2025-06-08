import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.scss'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Основные колонки - меняется только расположение */}
        <div className="footer__columns">
          <div className="footer__column">
            <h3 className="footer__title">Need Help</h3>
            <ul className="footer__links">
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/track-order">Track Order</a></li>
              <li><a href="/returns">Returns & Refunds</a></li>
              <li><a href="/faq">FAQ's</a></li>
              <li><a href="/careers">Career</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">euphoria Blog</a></li>
              <li><a href="/euphoriastan">euphoriastan</a></li>
              <li><a href="/collaboration">Collaboration</a></li>
              <li><a href="/media">Media</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">More Info</h3>
            <ul className="footer__links">
              <li><a href="/terms">Term and Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/shipping">Shipping Policy</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Location</h3>
            <address className="footer__address">
              <a href="mailto:support@euphoria.in">support@euphoria.in</a>
              <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
              <p>(NH 8- Near Mahadev Hotel) Udaipur, India 315002</p>
            </address>
          </div>
        </div>

        {/* Download App Section */}
        <div className="footer__download">
          <h3 className="footer__title">Download The App</h3>
          <div className="footer__app-links">
            <a href="#" className="app-link">
              {/* Вставьте свою иконку Google Play */}
              <span>Google Play</span>
            </a>
            <a href="#" className="app-link">
              {/* Вставьте свою иконку App Store */}
              <span>App Store</span>
            </a>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="footer__bottom">
          <div className="footer__social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
          
          <div className="footer__copyright">
            <p>Copyright © {new Date().getFullYear()} Euphoria Folks Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;