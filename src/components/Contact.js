import "./Global.css";

const Contact = () => {
  return (
    <div className="component">
      <div className="textdiv">
        <h4>Contact details:</h4>
        <p>
          <strong>E-mail:</strong> natalie.hallerdal@yahoo.se
        </p>
        <p>
          <strong>Phone number:</strong> +46735936556
        </p>
        <p style={{ fontSize: "17px" }}>
          (<strong>Note</strong> it's easiest to reach me by email or text message)
        </p>
        <br></br>

        <table>
          <tbody>
            <tr>
              <td>LinkedIn: </td>
              <a
                href="https://www.linkedin.com/in/natalie-h%C3%A4llerdal-4b2a9499/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/natalie-h%C3%A4llerdal-4b2a9499/
              </a>
            </tr>

            <tr>
              <td>Github</td>

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
