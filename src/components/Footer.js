import React from 'react'
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
  return (
      <div className="footer">
<footer className="bg-black text-center text-white">
  <div className="container p-2">
    <section className="mb-4">
      <a className="fab fa-linkedin-in " href="url" ><SocialIcon url="https://www.linkedin.com/in/daniela-velarde-8baa13141/"  target="_blank" rel="noopener noreferrer"/></a>
      <a className="fab fa-github-in" href="url" ><SocialIcon url="https://github.com/davelarde"  target="_blank" rel="noopener noreferrer"/></a>
      <a className="fab fa-gmail-in" href="url" ><SocialIcon url="mailto:danielavelarde4@gmail.com"  target="_blank" rel="noopener noreferrer"/></a>
  <div class="footer-copyright text-center py-auto p-0">Daniela Velarde Professional Portfolio
  </div>
  <div class="footer-copyright text-center py-auto p-0">Made with ❤ 
  </div>
    </section>
  </div>
</footer>
</div>
  ); 
};

export default Footer;