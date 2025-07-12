
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Logo from '../images/logo.png';
import BtnArrow from '../images/right-arrow.svg';
import DownArrow from '../images/down-arrow.svg';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

const smoothScroll = (e, targetId) => {
  e.preventDefault();

  const id = targetId.replace('/#', '').replace('#', '');
  const currentPath = pathname;

  if (currentPath !== '/' && targetId.startsWith('/#')) {
    // Navigate to home first, then scroll
    navigate(`/#${id}`, { replace: false });
    return;
  }

  const targetElement = document.getElementById(id);
  if (targetElement) {
    const headerHeight = document.querySelector('header')?.offsetHeight || 80;
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });

    if (!('scrollBehavior' in document.documentElement.style)) {
      smoothScrollFallback(targetPosition);
    }
  }
};

  // Fallback for older browsers
  const smoothScrollFallback = (targetPosition) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Container className="header__container">
        <div className="header__inner">
          <div className="header__logo">
            <a href="#hero"> 
              <img src={Logo} alt="" />
            </a>
          </div>

          <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
            <ul className="header__menu">
              <li className="header__menu-item">
                <Link to="/#hero" className='header__menu-link' onClick={(e) => smoothScroll(e, '/#hero')}>Home</Link>
              </li>
              <li className="header__menu-item">
                <Link to="/#offering" className='header__menu-link' onClick={(e) => smoothScroll(e, '/#offering')}>Offering</Link>
              </li>
              <li className="header__menu-item has_children">
                <Link to="/industry" className='header__menu-link'>Industry <img src={DownArrow} className='ml5' alt="" /></Link>
                <ul className='sub_menu'>
                  <li><Link to="/industry#restaurants">Restaurants</Link></li>
                  <li><Link to="/industry#HomeGarden">Home & Garden</Link></li>
                  <li><Link to="/industry#DentalClinic">Dental Clinics</Link></li>
                  <li><Link to="/industry#PoliticalCampaigns">Political Campaigns</Link></li>
                  <li><Link to="/industry#OpticalClinics">Optical Clinics</Link></li>
                  <li><Link to="/industry#RealEstate">Real Estate</Link></li>
                  <li><Link to="/industry#HealthWellness">Health & Wellness</Link></li>
                </ul>
              </li>
              <li className="header__menu-item">
                <Link to="#contact" className='header__menu-link' onClick={(e) => smoothScroll(e, '#contact')}>Contact</Link>
              </li>
            </ul>
            <Link to="#contact" className="btn btn__dark" onClick={(e) => smoothScroll(e, '#contact')}>Free Consult <span><img src={BtnArrow} alt="" /></span></Link>
          </nav>

          <div className="header__toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
