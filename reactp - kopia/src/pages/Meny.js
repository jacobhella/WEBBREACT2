import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Meny extends React.Component{
    render(){
        return(
            <div>
        <meta charSet="UTF-8" />
        <meta name="description" content="The Sea Street Sushi Bar" />
        <meta name="keywords" content="Sushi, Restaurang" />
        <meta name="author" content="Jacob Hellström" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet" />
        
        <div id="wrapper">
          <Header />
          <div className="vertical-line">
            <div id="menu">
              <h1>MENY</h1>
              <ul id="menunav">
                <li className="menunavbar"><a href="#Bowl">Bowl</a></li>
                <li className="menunavbar"><a href="#Sushi">Sushi</a></li>
                <li className="menunavbar"><a href="#Roll">Roll</a></li>
              </ul>
              <br />
              <h1 id="Bowl">Bowl</h1>
              <div className="realmenu">
                <h2><b>Lax Poke Bowl</b> <span className="textright">129kr</span></h2>
                <p>Lax</p>
                <hr />
                <h2><b>Grilled Chicken Poke Bowl</b> <span className="textright">129kr</span></h2>
                <p>Kyckling</p>
                <hr />
                <h2><b>Tuna Poke Bowl</b> <span className="textright">140kr</span></h2>
                <p>Tonfisk</p>
              </div>
              <div id="breaker" />
              <h1 id="Sushi">Sushi</h1>
              <div className="realmenu">
                <h2><b>Sushi Liten</b> <span className="textright">85kr</span></h2>
                <p>9 bitar: 4x rullar, 3x lax, 1x räka, 1x tonfisk</p>
                <hr />
                <h2><b>Linda Låda Liten</b> <span className="textright">85kr</span></h2>
                <p>9 bitar: 4x Rullar, 1x Lax, 2x Räka, 2x Avokado</p>
                <hr />
                <h2><b>Nybörjarsushi</b> <span className="textright">99kr</span></h2>
                <p>10 bitar: 4x Rullar, 2x Lax, 1x Räka, 1x Tofu, 1x Ägg, 1x Avokado</p>
                <hr />
                <h2><b>Sushi Mellan</b> <span className="textright">105kr</span></h2>
                <p>11 bitar: 4x rullar, 4x lax, 2x räkor, 1x tonfisk</p>
                <hr />
                <h2><b>Linda Låda Mellan</b>
                  <span className="textright">105kr</span></h2>
                <p>11 bitar: 4x Rullar, 2x Lax, 3x Räkor, 2x Avokado</p>
              </div>
              <div id="breaker" />
              <h1 id="Roll">Roll</h1>
              <div className="realmenu">
                <h2><b>California Roll</b>
                  <span className="textright">89kr</span></h2>
                <p>10 bitar (lax, avokado, gurka, crabsticks)</p>
                <hr />
                <h2><b>Mango Exclusive Roll</b> <span className="textright">130kr</span></h2>
                <p>10 bitar (Mango, philadelphiaost, gurka, avokado, rå lax och sås ovanpå)</p>
                <hr />
                <h2><b>Teriyaki Roll</b> <span className="textright">135kr</span></h2>
                <p>10 bitar (Friterad kyckling, avokado och sås ovanpå)</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
            )
        }
    }
    
    export default Meny;