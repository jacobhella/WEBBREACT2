import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function changeTextColorTop(){
    document.getElementById("indextexttop").style.color = "red";
}
  
function changeTextColorBottom(){
    document.getElementById("indextextbottom").style.color = "red";
}

class Home extends React.Component{
    render(){
        return(
            <div>
            <meta charSet="UTF-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet" />
            
            <div id="overlay"></div>
            <div id="wrapper">
                <Header />
              <div className="vertical-line">
                <div className="row">
                  <div className="column">
                    <div>
                      <h2><b>Sea Street Sushi</b></h2>
                      <p style={{padding: '4%'}} id="indextexttop" onClick={changeTextColorTop}>När smaken betyder allt. Välkommen och upplev nyttig, fräsch och prisvärd japansk matkultur som har gjort succé i Norrland. </p>
                    </div>
                    <img id="sushi1" src="/files/nedladdning.jfif" alt="Display of sushi" />
                  </div>
                  <div className="column">
                    <img id="sushi2" src="/files/nedladdning1.jfif" alt="Display of sushi" />
                    <div>
                      <h2><b>Om Oss</b> </h2>
                      <p style={{padding: '4%'}} id="indextextbottom" onClick={changeTextColorBottom}>Vi startade vår resa i Sundsvall med kvalité som mål. Nu finns vi i fem städer.</p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            <Footer  />
            </div>
            </div>
        )
    }
}

export default Home;