import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { RxTwitterLogo } from 'react-icons/rx';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <h2>Shortly</h2>
      <div className="Link-Box">
        <h3>Features</h3>
        <a>Link shortening</a>
        <a>Branded Links</a>
        <a>Analystic</a>
      </div>
      <div className="Link-Box">
        <h3>Resources</h3>

        <a>Blog</a>
        <a>Developers</a>
        <a>Support</a>
      </div>
      <div className="Link-Box">
        <h3>Company</h3>

        <a>About</a>
        <a>Our Team</a>
        <a>Careers</a>
        <a>Contact</a>
      </div>
      <div className="Social-Links">
        <a>
          <AiOutlineFacebook title={'Facebook'} size={30} />
        </a>
        <a>
          <RxTwitterLogo title={'Twitter'} size={30} />
        </a>
        <a>
          {' '}
          <AiOutlineInstagram title={'Intagram'} size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
