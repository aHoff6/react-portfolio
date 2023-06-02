export default function About() {
  return (
    <section className="about-container">
      <h1 className="title" id="about-title">About Me</h1>
      <div>
        <figure className="aside-container">
          <img
            src={require("../assets/images/aboutProfilePic1.jpeg")}
            alt="aboutProfilepic1"
            className="aboutPic"
          />
        
        <p className="about-text">
          Aspiring web developer who recently completed the Full-Stack Coding
          Bootcamp at Rutgers University, equipped with a strong foundation in front-end and back-end
          technologies such as HTML, CSS, JavaScript, React, and Node.js. With a
          creative and analytical mindset, I enjoy solving challenges and
          delivering visually appealing and user-friendly web experiences.
          Collaboration, communication, and continuous learning are key aspects
          of my work, and I am eager to contribute my skills to projects that
          make a positive impact.
        </p>
        
      
      
      <ul className="skillList">
      <h2 className="skills-title">Topics learned:</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>API Interactions</li>
        <li>User Authentication</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>PWA</li>
        <li>React.js</li>
        <li>MERN Stack</li>
        <li>Git</li>
        <li>AJAX</li>
      </ul>
      </figure>
      </div>
    
    </section>
  );
}
