import React from "react";
import "./App.css";
import bgImage from "./assets/image5.png"; // put your background image here

function App() {
  return (
    <div className="portfolio">

      {/* Background overlay */}
      <div className="background"></div>

      {/* Navigation Menu */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Sections Container */}
      <div className="sections">

        {/* Home Section */}
        <header id="home" className="section">
          <h1>Hi, I'm Raksha Kamath B👋</h1>
          <h2>AI/ML Engineer | Web Developer | Innovator</h2>
          <p>Passionate about building intelligent and interactive applications.</p>
        </header>

      
        {/* About Section */}
<section id="about" className="section about">
   <div className="section-box">
  <h2>About Me</h2>
  <p>
    I’m a final-year AI/ML student with a strong passion for solving real-world problems using data and code. 
    I enjoy building intelligent applications, exploring machine learning, NLP, and computer vision projects. 
    Apart from coding, I love experimenting with frontend development and creating interactive user experiences. 
    I’m eager to learn, innovate, and contribute to projects that make a difference.
  </p>
   </div>
</section>

       

        {/* Skills Section */}
        
<section id="skills" className="section skills">
   <div className="section-box">
  <h2>Skills</h2>
  <p>
    <strong>Programming Languages:</strong> Python, Java, JavaScript, C, C++<br />
    <strong>Full Stack Development:</strong> HTML, CSS, React.js, Angular.js<br />
    <strong>AI/ML:</strong> TensorFlow, PyTorch, scikit-learn, Computer Vision & NLP, Deep Learning<br />
    <strong>Version Control:</strong> Git/GitHub<br />
    <strong>Cloud:</strong> Cloud fundamentals<br />
    <strong>Operating Systems:</strong> Linux (Ubuntu), Windows<br />
    <strong>Other Skills:</strong> Data Structures, OOP, SQL & Database Management
  </p>
   </div>
</section>

       
        {/* Projects Section */}
<section id="projects" className="section projects">
  <h2>Projects</h2>
  <div className="projects-container">

    <div className="project">
      <h3>AI Chatbot for Investment Management</h3>
      <ul>
        <li>Designed an AI-driven chatbot that provides personalized investment advice based on user goals, risk tolerance, and financial history.</li>
        <li>Implemented session tracking, fallback intents, and logging for enhanced reliability and user personalization.</li>
      </ul>
    </div>

    <div className="project">
      <h3>Speech Recognition with Deep Neural Networks</h3>
      <ul>
        <li>Developed a system to classify voice type (male/female, emotional tone) from audio recordings using MFCC features and deep RNNs.</li>
        <li>Optimized GPU utilization with .cuda() and implemented mini-batch scheduling to speed up training.</li>
        <li>Added model checkpointing, training logs, and runtime analysis via torch.utils.bottleneck.</li>
      </ul>
    </div>

    <div className="project">
      <h3>Clothing E-Commerce Website</h3>
      <ul>
        <li>Built a full-stack e-commerce application for clothing retail, supporting user registration, login, product browsing, and secure checkout.</li>
        <li>Designed a responsive and intuitive UI using HTML, CSS, and JavaScript, optimized for desktop and mobile users.</li>
      </ul>
    </div>

    <div className="project">
      <h3>Food Atlas Website</h3>
      <ul>
        <li>Developed a recipe exploration platform where users can browse cuisines, view recipes, and save favorites.</li>
        <li>Implemented interactive UI features, including category sliders, recipe cards, and accordions for ingredients and preparation steps.</li>
        <li>Optimized user experience with smooth navigation and mobile responsiveness.</li>
      </ul>
    </div>

    <div className="project">
      <h3>Customer Segmentation for E-Commerce</h3>
      <ul>
        <li>Conducted data-driven segmentation to classify customers based on purchase behavior, demographics, and engagement.</li>
        <li>Applied clustering algorithms (K-Means, Hierarchical) and visualized insights to guide marketing strategies and personalized recommendations.</li>
      </ul>
    </div>

    <div className="project">
      <h3>JewelAR – Enhanced Jewellery Selection through AR</h3>
      <ul>
        <li>An augmented reality-based web app that allows users to try on jewellery virtually.</li>
        <li>On going project.</li>
      </ul>
    </div>

  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="section">
           
          <h2>Contact</h2>
          <p>Email: rakshakamath18@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/rakshakamathb/">RakshaKamathB</a></p>
        
        </section>

      </div>
    </div>
  );
}

export default App;
