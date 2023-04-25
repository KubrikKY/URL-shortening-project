import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <h1>Shortly</h1>
      {/* /////////////////////// */}
      <div className="Features">
        <h3>Features</h3>
        <a>Link shortening</a>
        <a>Branded Links</a>
        <a>Analystic</a>
      </div>
      <div className="Resources">
        <h3>Resources</h3>

        <a>Blog</a>
        <a>Developers</a>
        <a>Support</a>
      </div>
      <div className="Company">
        <h3>Company</h3>

        <a>About</a>
        <a>Our Team</a>
        <a>Careers</a>
        <a>Contact</a>
      </div>
      <div className="Links">
        <a>Facebook</a>
        <a>Twitter</a>
        <a>Instagram</a>
      </div>
      {/* /////////////////////////////////  */}
    </div>
  );
};

export default Footer;
