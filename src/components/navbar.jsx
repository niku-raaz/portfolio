import '../index.css';
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/icon-linkedin.png';
import instagramLogo from '../assets/icon-instagram.png';
import youtubeLogo from '../assets/Youtube-logo.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        
        <a href="https://github.com/niku-raaz"><img src={githubLogo} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/niku-raaz/"><img src={linkedinLogo} alt="LinkedIn" /></a>
        <a href="https://www.instagram.com/raaz.niku/?hl=en"><img src={instagramLogo} alt="Instagram" /></a>
        <a href="https://www.youtube.com/@niku_raaz"><img src={youtubeLogo} alt="Youtube" /></a>
        
      </div>
      
    </div>
  );
}
