import "./Global.css";

const Contact = () => {
  return (
    <div className="component">
      <div className="textdiv">
        <h4>Kontaktuppgifter:</h4>
        <p><strong>E-mail:</strong> natalie.hallerdal@yahoo.se</p>
        <p><strong>Telefonnummer:</strong> +46735936556</p>
        <p style={{fontSize: "17px"}}>(<strong>OBS</strong> lättast når du mig på email eller sms)</p>
        <br></br>

        <table>
          <tbody>
            <tr>
              <td>Besök min linkedIn: </td>
                  <a
          href="https://www.linkedin.com/in/natalie-h%C3%A4llerdal-4b2a9499/"
          target="_blank"
          rel="noreferrer"
        >
         https://www.linkedin.com/in/natalie-h%C3%A4llerdal-4b2a9499/
        </a>
            </tr>
    
         <tr>
        <td>Besök min Github</td>
       
        <a
          href="https://github.com/natta1995"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/natta1995
        </a>
        </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
