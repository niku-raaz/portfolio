// components/Clients.jsx
import '../index.css';

export default function Clients() {
  return (
    <div className="clients">
      <h2>Projects & Skills</h2>
      
      <div className="section">
        <h3>Featured Projects</h3>
        <div className="logos">
          <div className="logo">
            <h4>Music Streaming Platform</h4>
            <p>Full-stack music streaming application with real-time features</p>
            <a href="https://github.com/niku-raaz/SpotifyClone" className="project-link" target="_blank" rel="noopener noreferrer">
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="logo">
            <h4>ZCoder: Collaborative Learning</h4>
            <p>Interactive coding platform for collaborative learning</p>
            <a href="https://github.com/mayankkudwan/Zcoder-Platform" className="project-link" target="_blank" rel="noopener noreferrer">
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="logo">
            <h4>AuraFX: Photo Editing</h4>
            <p>Advanced photo editing application with features</p>
            <a href="https://github.com/niku-raaz/imageFilter" className="project-link" target="_blank" rel="noopener noreferrer">
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="logo">
            <h4>2048 Game</h4>
            <p>Classic 2048 game implementation with modern UI</p>
            <a href="https://github.com/niku-raaz/2048" className="project-link" target="_blank" rel="noopener noreferrer">
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="logo">
            <h4>Markov Chain Text Generator</h4>
            <p>Text generator using Markov Chain model for poetic phrases</p>
            <a href="https://github.com/niku-raaz/sent-markov" className="project-link" target="_blank" rel="noopener noreferrer">
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Technical Skills</h3>
        <div className="logos">
          <div className="logo">C++</div>
          <div className="logo">Python</div>
          <div className="logo">C</div>
          <div className="logo">JavaScript</div>
          <div className="logo">Go</div>
          <div className="logo">React</div>
          <div className="logo">Node.js</div>
          <div className="logo">MySQL</div>
          <div className="logo">AWS</div>
          <div className="logo">Git</div>
        </div>
      </div>

      <div className="section">
        <h3>Academic Background</h3>
        <div className="logos">
          <div className="logo">Linear Algebra</div>
          <div className="logo">Discrete Mathematics</div>
          <div className="logo">Real Analysis</div>
          <div className="logo">Data Structures & Algorithms</div>
          <div className="logo">Advanced DSA</div>
          <div className="logo">Probability & Statistics</div>
          <div className="logo">Object-Oriented Programming</div>
          <div className="logo">Database Management</div>
          <div className="logo">Computer Networks</div>
          <div className="logo">Operating Systems</div>
        </div>
      </div>

      <div className="section">
        <h3>Interests & Activities</h3>
        <div className="logos">
          <div className="logo">Competitive Programming</div>
          <div className="logo">Chess</div>
          <div className="logo">Photography</div>
          <div className="logo">Cinematography</div>
          <div className="logo">Video Editing</div>
          <div className="logo">Freelancing</div>
        </div>
      </div>
    </div>
  );
}
