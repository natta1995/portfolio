import "./Global.css";
import profileImg from "../Img/facebook profilbild.jpg";

const About = () => {
  return (
    <div className="component">
      <div className="textdiv">
        <h4> Om mig: </h4>

        <p>
          Hej! Jag heter Natalie och jag vill verkligen jobba med kod. 
        </p>
        <p>
        Jag är
          utbildad frontendutvecklare med inriktning på webbsäkerhet, och jag
          tycker om att bygga lösningar som är tydliga, trygga och användbara.
        </p>
        <p>
          Jag är snäll, driven och en sån som lyssnar, lär och gärna hjälper
          till. Jag tror att teknik blir som bäst när den kombineras med omtanke
          – både för användaren och teamet. I mina projekt har jag fokuserat på
          struktur, responsiv design och funktionallitet.
        </p>
        <p>
          Jag är nyfiken, lär mig snabbt och trivs i ett arbetsklimat där man
          får vara både sig själv och utvecklas tillsammans.
        </p>

        <p>
          Är du nyfiken på mig, mina projekt eller bara vill prata
          programmering?
        </p>
        <p>Hör gärna av dig – jag är redo.</p>
        <div className="about-wrapper">
          <div className="about-text">
            <h4>Tre korta om mig:</h4>
            <ul>
              <li>
                Älskar att gå i skogen och plocka svamp - till mina näras
                förtjusning.
              </li>
              <li>Älskar böcker, särskillt klassiker som Agatha Christie.</li>
              <li> Har en stark kärlek till Ada Lovelace.</li>
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
