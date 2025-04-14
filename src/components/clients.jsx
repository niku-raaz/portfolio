// components/Clients.jsx
import '../index.css';

export default function Clients() {
  return (
    <div className="clients">
      <h2>Projects that I have worked on:</h2>
      <div className="logos" style={{
        marginTop:"20px",
        display:"flex",
        flexWrap:"wrap",
      }}>
        <div className="logo" >Music Streaming Platform</div>
        <div className="logo">ZCoder: Collaborative Learning</div>
        <div className="logo">AuraFX: Photo Editing</div>
        <div className="logo">2048 </div>
        
      </div>

      <h2>Things I know:</h2>
      <div className="logos" style={{
        marginTop:"10px",
        display:"flex",
        flexWrap:"wrap",
      }}>
        <div className="logo" >C++</div>
        <div className="logo">Python</div>
        <div className="logo">C</div>
        <div className="logo">Go</div>
        <div className="logo">mySQL</div>
        <div className="logo">NodeJS</div>
        <div className="logo">React</div>
        <div className="logo">NodeJS</div>
        
      </div>

      <h2>Courses I have studied:</h2>
      <div className="logos" style={{
        marginTop:"10px",
        display:"flex",
        flexWrap:"wrap",
      }}>
        <div className="logo" >Linear Algebra</div>
        <div className="logo">Discrete Mathematics</div>
        <div className="logo">Real Analysis</div>
        <div className="logo">Data Structures and Algorithms</div>
        <div className="logo">Advanced DSA</div>
        <div className="logo">Probability</div>
        <div className="logo">Statistics</div>
        <div className="logo">OOPs</div>
        <div className="logo">DBMS</div>
        <div className="logo">Computer Networks</div>
        <div className="logo">Operating Systems</div>
        
      </div>
      <h2>Extra Curriculars: </h2>
      <div className="logos" style={{
        marginTop:"10px",
        display:"flex",
        flexWrap:"wrap",
      }}>
        <div className="logo" >Chess</div>
        <div className="logo">Photography</div>
        <div className="logo">Cinematography</div>
        <div className="logo">Editing</div>
        <div className="logo">Freelancing</div>
        <div className="logo">CP</div>
        
        
      </div>





    </div>
    
  );
}
