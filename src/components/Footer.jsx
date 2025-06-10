import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const aboutLinks = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/jobs" }
  ];

  const helpLinks = [
    { text: "Central de ajuda", link: "/help" },
    { text: "Política de privacidade", link: "/privacy" },
    { text: "Termos de uso", link: "/terms" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Logo />
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
            aliquam nisl, eget ultricies nisl nisl eget nisl.
          </p>
          <div className="social-icons">
            <img src="/assets/facebook.svg" alt="Facebook" />
            <img src="/assets/instagram.svg" alt="Instagram" />
            <img src="/assets/twitter.svg" alt="Twitter" />
          </div>
        </div>
        <div className="footer-links">
          <FooterSection title="Sobre" informations={aboutLinks} />
          <FooterSection title="Ajuda" informations={helpLinks} />
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="copyright">© {new Date().getFullYear()} Digital Store</p>
    </footer>
  );
};

const FooterSection = ({ title, informations }) => {
  return (
    <div className="footer-section">
      <h3 className="footer-title">{title}</h3>
      <ul className="footer-list">
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
