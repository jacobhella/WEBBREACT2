import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import confirm from "jquery";
import alert from "jquery";
import ButtonCounter from "../components/ButtonCounter";

function answerfunc(){
    var answer = confirm("Är du färdig med din beställning?")
    if (answer){

        alert("Din beställning har tagits emot!");
        window.location = "Home";
    }
}

class Bestall extends React.Component{
    render(){
        return(
            <div><meta charSet="UTF-8" />
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
              <h1>BESTÄLL</h1>
              <form action="/">
                <label htmlFor="email">Ange mailaddress för att få kvitto:</label>
                <input type="email" id="email" name="email" />
                <input type="submit" />
              </form>
              <br />
              <br />
              <button type="button" onClick= {answerfunc}>CHECKOUT</button>
              <div>
                <button id="buttonFadeOut">Fade Out</button>
                <button id="buttonFadeIn">Fade In</button>
              </div>
              <br />
              <br />
              <ul id="menunav">
                <li className="menunavbar"><a href="#Bowl">Bowl</a></li>
                <li className="menunavbar"><a href="#Sushi">Sushi</a></li>
                <li className="menunavbar"><a href="#Roll">Roll</a></li>
              </ul>
              <br />
              <h1 id="Bowl">Bowl</h1>
              <div className="realmenu">
                <h2><b>Lax Poke Bowl</b> 
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 129kr</span></h2>
                <p>Lax<h2><ButtonCounter/></h2></p>
                <hr />
                <h2><b>Grilled Chicken Poke Bowl</b> 
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 129kr</span></h2>
                <p>Kyckling<h2><ButtonCounter/></h2></p>
                <hr />
                <h2><b>Tuna Poke Bowl</b> 
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 140kr</span></h2>
                <p>Tonfisk<h2><ButtonCounter/></h2></p>
              </div>
              <h1 id="Sushi">Sushi</h1>
              <div className="realmenu">
                <h2><b>Sushi Liten</b> 
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 85kr</span></h2>
                <p>9 bitar: 4x rullar, 3x lax, 1x räka, 1x tonfisk<h2><ButtonCounter/></h2></p>
                <hr />
                <h2><b>Linda Låda Liten</b> 
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 85kr</span></h2>
                <p>9 bitar: 4x Rullar, 1x Lax, 2x Räka, 2x Avokado <h2><ButtonCounter/></h2></p>
                <hr />
                <h2><b>Nybörjarsushi</b> 
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 99kr</span></h2>
                <p>10 bitar: 4x Rullar, 2x Lax, 1x Räka, 1x Tofu, 1x Ägg, 1x Avokado<h2><ButtonCounter/></h2></p>
                <hr />
                <h2><b>Sushi Mellan</b> 
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 105kr</span></h2>
                <p>11 bitar: 4x rullar, 4x lax, 2x räkor, 1x tonfisk<h2><ButtonCounter/></h2></p>
                <hr />
                <h2><b>Linda Låda Mellan</b>
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 105kr</span></h2>
                <p>11 bitar: 4x Rullar, 2x Lax, 3x Räkor, 2x Avokado<h2><ButtonCounter/></h2></p>
              </div>
              <h1 id="Roll">Roll</h1>
              <div className="realmenu">
                <h2><b>California Roll</b>
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 89kr</span></h2>
                <p>10 bitar (lax, avokado, gurka, crabsticks)<h2><ButtonCounter/></h2></p>
                <hr />
                <h2><b>Mango Exclusive Roll</b> 
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 130kr</span></h2>
                <p>10 bitar (Mango, philadelphiaost, gurka, avokado, rå lax och sås ovanpå)<h2><ButtonCounter/></h2></p>
                <hr />
                <h2><b>Teriyaki Roll</b> 
                  <span className="textright" onmouseover="resize(this, '130%')" onmouseout="resize(this, '100%')">+ 135kr</span></h2>
                <p>10 bitar (Friterad kyckling, avokado och sås ovanpå)<h2><ButtonCounter/></h2></p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <Footer/>
        </div>
      </div>
            )
        }
    }
    
    export default Bestall;