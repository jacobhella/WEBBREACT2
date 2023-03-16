import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Oppettider extends React.Component{
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
          <Header/>
          <div className="vertical-line">
            <div>
              <div className="realmenu">
                <h1><b>UMEÅ</b> </h1>
                <h2>Öppettider:</h2>
                <p>Måndag <b>12:00 - 20:15</b></p>
                <p>Tisdag <b>10:30 - 20:15</b></p>
                <p>Onsdag <b>10:30 - 20:15</b></p>
                <p>Torsdag <b>10:30 - 20:15</b></p>
                <p>Fredag <b>10:30 - 20:15</b></p>
                <p>Lördag <b>11:00 - 20:15</b></p>
                <p>Söndag <b>11:00 - 19:45</b></p>
                <hr />
                <h1><b>SUNDSVALL</b> </h1>
                <h2>Öppettider:</h2>
                <p>Måndag <b>12:00 - 20:15</b></p>
                <p>Tisdag <b>10:30 - 20:15</b></p>
                <p>Onsdag <b>10:30 - 20:15</b></p>
                <p>Torsdag <b>10:30 - 20:15</b></p>
                <p>Fredag <b>10:30 - 20:15</b></p>
                <p>Lördag <b>11:00 - 20:15</b></p>
                <p>Söndag <b>11:00 - 19:45</b></p>
                <hr />
                <h1><b>HÄRNÖSAND</b> </h1>
                <h2>Öppettider:</h2>
                <p>Måndag <b>12:00 - 20:15</b></p>
                <p>Tisdag <b>10:30 - 20:15</b></p>
                <p>Onsdag <b>10:30 - 20:15</b></p>
                <p>Torsdag <b>10:30 - 20:15</b></p>
                <p>Fredag <b>10:30 - 20:15</b></p>
                <p>Lördag <b>11:00 - 20:15</b></p>
                <p>Söndag <b>11:00 - 19:45</b></p>
                <hr />
                <h1><b>HUDIKSVALL</b> </h1>
                <h2>Öppettider:</h2>
                <p>Måndag <b>12:00 - 20:15</b></p>
                <p>Tisdag <b>10:30 - 20:15</b></p>
                <p>Onsdag <b>10:30 - 20:15</b></p>
                <p>Torsdag <b>10:30 - 20:15</b></p>
                <p>Fredag <b>10:30 - 20:15</b></p>
                <p>Lördag <b>11:00 - 20:15</b></p>
                <p>Söndag <b>11:00 - 19:45</b></p>
                <hr />
                <h1><b>ÅRE</b> </h1>
                <h2>Öppettider:</h2>
                <p>Måndag <b>12:00 - 20:15</b></p>
                <p>Tisdag <b>10:30 - 20:15</b></p>
                <p>Onsdag <b>10:30 - 20:15</b></p>
                <p>Torsdag <b>10:30 - 20:15</b></p>
                <p>Fredag <b>10:30 - 20:15</b></p>
                <p>Lördag <b>11:00 - 20:15</b></p>
                <p>Söndag <b>11:00 - 19:45</b></p>
                <hr />
                <h1><b>ÖSTERSUND</b> </h1>
                <h2>Öppettider:</h2>
                <p>Måndag <b>12:00 - 20:15</b></p>
                <p>Tisdag <b>10:30 - 20:15</b></p>
                <p>Onsdag <b>10:30 - 20:15</b></p>
                <p>Torsdag <b>10:30 - 20:15</b></p>
                <p>Fredag <b>10:30 - 20:15</b></p>
                <p>Lördag <b>11:00 - 20:15</b></p>
                <p>Söndag <b>11:00 - 19:45</b></p>
              </div>
              <br />
              <br />
              <br />
              <br />
              <video id="video" controls>
                <source src="/files/japanvid.webm" type="video/webm" />
                Your browser does not support HTML video.
              </video>
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
    
    export default Oppettider;