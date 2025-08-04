// components/Experience.jsx
import '../index.css';
import ZeptoLogo from '../assets/zepto.JPG';

export default function Experience() {
  return (
    <div id="experience" className="experience">
      <h2>Experience</h2>
      
      <div className="experience-item">
        <div className="experience-content-wrapper">
          <div className="experience-content">
            <div className="experience-header">
              <h3>Software Engineering Intern - Zepto</h3>
            </div>
            
            <div className="achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Reduced AWS costs significantly by replacing Lambda-based document generation with the lightweight wkhtml package</li>
                <li>Integrated New Relic alerting into Temporal Workflows and Cron to enable better observability and faster incident response</li>
                <li>Suppressed unnecessary document generation in some cases, resulting in improved financial efficiency for both vendors and us</li>
              </ul>
            </div>
            
            <div className="learnings">
              <h4>Key Learnings:</h4>
              <ul>
                <li>Writing production-level code that truly makes an impact</li>
                <li>Understanding monitoring and deployments in real-world systems</li>
                <li>Maintaining clear communication across teams</li>
              </ul>
            </div>
            
            <div className="tech-stack">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                <span className="tech-tag">Go</span>
                <span className="tech-tag">Kafka</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">AWS Lambda</span>
                <span className="tech-tag">New Relic</span>
                <span className="tech-tag">Grafana</span>
                <span className="tech-tag">Kubernetes</span>
                <span className="tech-tag">Docker</span>
              </div>
            </div>
          </div>
          
          <div className="experience-logo">
            <img src={ZeptoLogo} alt="Zepto Logo" />
          </div>
        </div>
      </div>
    </div>
  );
} 