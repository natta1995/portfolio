import "./Global.css";
import profileImg from "../Img/facebook profilbild.jpg";

const About = () => {
  return (
    <div className="component">
      <div className="textdiv">
        <h4> About me: </h4>

        <p>
          Hi, my name is Natalie and I love problem-solving.
        </p>

        <p>
          I'm a trained frontend developer with a focus on web security 
          (mainly JavaScript and React), and I enjoy building solutions 
          that are clear, secure, and user-friendly.
        </p>

        <p>
          Right now, I’m expanding my knowledge by studying backend 
          development with a focus on cloud technologies 
          (mainly C# and .NET).
        </p>

        <p>
          I’m kind, driven, and someone who listens, learns, and is 
          always happy to help. I believe that technology is at its best 
          when it’s built with care — both for the user and the team. 
          In my projects, I’ve focused on structure, responsive design, 
          and strong functionality.
        </p>

        <p>
          I’m curious, quick to learn, and I thrive in environments 
          where you can be yourself while growing together with others.
        </p>

        <p>
          If you're curious about me, my projects, or just want to talk 
          programming —
        </p>
        <p>Feel free to reach out — I'm ready.</p>

        <a href="#contact">Contact details</a>

        <div className="about-wrapper">
          <div className="about-text">
            <h4>Get to know me - Three short facts about me:</h4>
            <ul>
              <li>
                I love walking in the forest and picking mushrooms — 
                to the delight of my loved ones.
              </li>
              <li>
                I'm a big fan of books, especially classics 
                like Agatha Christie.
              </li>
              <li>
                I love finding new and creative ways to solve problems — whether it's coding, crocheting, or any of my other projects.
              </li>
            </ul>
          </div>

          <div className="about-img">
            <img src={profileImg} alt="Natalie" className="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

