import "./Global.css";

const Contact = () => {
  return (
    <div className="component">
      <div className="textdiv">
        <h4>Kontakta mig:</h4>
        <p><strong>OBS</strong> lättast når du mig på email eller sms</p>
        <p><strong>E-mail:</strong> natalie.hallerdal@yahoo.se</p>
        <p><strong>Telefonnummer:</strong> +46735936556</p>
        <br></br>
        <a
          href="https://www.linkedin.com/in/natalie-h%C3%A4llerdal-4b2a9499/"
          target="_blank"
          rel="noreferrer"
        >
         Besök min LinkedIn
        </a>
        <br></br>
        <a
          href="https://github.com/natta1995"
          target="_blank"
          rel="noreferrer"
        >
          Besök min GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
