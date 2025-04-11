import "./Global.css";

const Projects = () => {
  return (
    <div className="component">
      <div className="textdiv">
        <h4> Mina projekt</h4>
        <div className="projectdiv">
          <h4>DearFriends - Socialamedieplattform</h4>
          <p>Storlek: STOR</p>
          <p>
            Syfte: Att skapa en fullstackapplication och kunna exprementera med
            många olika funktioner.
          </p>
          <p>
            Om: En sociala media plattform där du kan dela med dig av inlägg
            (med eller utan bild) till dina vänner, hitta och lägga till nya
            vänner. Kommentera och gilla varandras inlägg. Göra din profil med
            bild och den information du väljer att dela. Självklart kan du
            chatta på tu man hand med dina vänner i realtidschatten.
          </p>
          <p>Ta del av koden här:</p>
          <p>Frontend:</p>
          <a
            href="https://github.com/natta1995/frontend-app"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/natta1995/frontend-app
          </a>
          <p>Backend:</p>
          <a
            href="https://github.com/natta1995/backend-app"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/natta1995/backend-app
          </a>
          <p>Öppna sidan här:</p>
          <a
            href="https://github.com/natta1995/frontend-app"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/natta1995/frontend-app
          </a>
          <br></br>
          <span> React</span>
          <span> JavaScript</span>
          <span> TypeScript</span>
          <span> MySQL</span>
          <span> Node.js</span>
        </div>
        <div className="projectdiv">
          <h4>BooksByHeart - Webshop (expriment)</h4>
          <p>Storlek: Medel</p>
          <p>Syfte: Att exprementera med frontend (bara). </p>
          <p>Om: </p>
          <br></br>
          <span> React</span>
          <span> JavaScript</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
