export default function About() {
  return (
    <section className="about-container">
      <h1 className="title" id="about-title">
        About Me
      </h1>
      <div>
        <figure className="aside-container">
          <img
            src={require("../assets/images/aboutProfilePic1.jpeg")}
            alt="aboutProfilepic1"
            className="aboutPic"
          />

          <p className="about-text">
            Aspiring web developer who recently completed the Full-Stack Coding
            Bootcamp at Rutgers University, equipped with a strong foundation in
            front-end and back-end technologies such as HTML, CSS, JavaScript,
            React, and Node.js. With a creative and analytical mindset, I enjoy
            the challenges that delivering a visually appealing and
            user-friendly web experience brings. Currently working as an
            Equipment Technician at a high end golf course, problem solving and
            troubleshooting are practiced daily. Overcoming an abundance of
            daunting challenges throughout my career gave me the confidence
            needed to take on the bootcamp and focus on a new passion. Feel free to review my portfolio, resume, and contact me with any inquiries!
          </p>

          <ul className="skillList">
            <h2 className="skills-title">Topics learned:</h2>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
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
