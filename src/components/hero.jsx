// components/Hero.jsx
import '../index.css';
import Profile from '../assets/profile.jpg'; // Replace with your image

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Niku Raj</h1>
        <p>Hey there! I’m Niku Raj, a passionate and driven 3rd-year undergraduate student at IIT Guwahati, majoring in Mathematics and Computing. My journey so far has been a blend of numbers, logic, creativity, and an insatiable hunger to keep growing every single day — both as a technologist and as a person.

At the core, I’m someone who’s always been deeply fascinated by mathematics. It’s more than just a subject for me — it’s a way of thinking, a way to break down complex systems into elegant solutions. This love for abstract thinking and logical problem-solving naturally led me to the world of competitive programming, where I get to put my skills to the test. I currently hold the title of Specialist on Codeforces and have achieved a solid 1800+ rating on LeetCode — and I’m constantly pushing myself to reach higher.

When it comes to coding, I’m proficient in Python, C++, and C — languages that I’ve used to build projects, solve real-world problems, and excel in various coursework. But I’m not stopping there. I’m currently exploring the depths of JavaScript and Golang, aiming to become a well-rounded full-stack developer, with a strong foundation in backend development and system-level programming.

Beyond the world of code and logic, I’m also a storyteller at heart. I have a genuine passion for cinematography and video editing, and I’m an active member of my college’s Filmmaking Club. Whether it's framing a perfect shot, editing a meaningful sequence, or bringing out emotion through visuals — I love the entire creative process. </p>
        
        <a href='https://drive.google.com/file/d/1qobnbvvbf3XBXyEe4i1OXI-NAotZ5_9G/view?usp=sharing'>Resume</a>
        
      </div>
      <div className="hero-image">
        <img src={Profile} alt="Profile" />
      </div>
    </div>
  );
}
