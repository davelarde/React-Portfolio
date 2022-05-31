import React from 'react'

const Footer = () => {
  return (
      <div className="footer">
<footer className="bg-black text-center text-white">
  <div className="container p-2">
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-3 text-white" href="https://www.linkedin.com/in/daniela-velarde-8baa13141/" role="button" ><i className="fab fa-linkedin-in" target="_blank" rel="noopener noreferrer"></i>LINKEDIN</a>

      <a className="btn btn-outline-light btn-floating m-3 text-white" href="https://github.com/davelarde" role="button" ><i className="fab fa-github"target="_blank" rel="noopener noreferrer"></i>GITHUB  </a>
      <a className="btn btn-outline-light btn-floating m-3 text-white" href="mailto:danielavelarde4@gmail.com" role="button" ><i className="fab fa-EMAIL"target="_blank" rel="noopener noreferrer"></i>EMAIL ME ✉ </a>
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