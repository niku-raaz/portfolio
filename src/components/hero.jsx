// components/Hero.jsx
import '../index.css';
import Profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <div className="hero">
      <div className="aura" aria-hidden="true"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span>Hey,</span>
            <span>I'm</span>
          </div>
          <h1 className="name">Niku Raj</h1>
          <p className="title">Software Developer</p>
          <div className="hero-buttons">
            <a href='https://drive.google.com/file/d/1XPyDzeDn1ZRc1OfYajeqZXa2CSxaL7oa/view?usp=sharing' className="btn-primary">Download Resume</a>
            <a href='#experience' className="btn-secondary">View Experience</a>
          </div>
        </div>
        
        <div className="hero-image">
          <img src={Profile} alt="Niku Raj" />
        </div>
      </div>
    </div>
  );
}
