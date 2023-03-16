import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

class HittaHit extends React.Component{
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
              <iframe id="map" title="Karta till restaurang" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.9175961946717!2d20.25734601625798!3d63.82577368345123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b0c8cb67da5%3A0x8dd0e3ac0e61fafd!2sSea%20Street%20Sushi%20Bar%20Ume%C3%A5!5e0!3m2!1ssv!2sse!4v1675762446457!5m2!1ssv!2sse" allowFullScreen width={450} height={450} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="imagecenter" />
            </div>
            <div>
              <br />
              <br />
              <p style={{padding: '2%', margin: '0%'}}>Du hittar oss på </p> 
              <p style={{padding: '2%', margin: '0%'}}>Renmarkstorget 6, 903 26 UMEÅ</p>
              <p style={{padding: '2%', margin: '0%'}}>Välkommen!</p>
              <p style={{padding: '2%', margin: '0%'}}><a href="https://maps.google.com/maps?ll=63.825774,20.259535&z=16&t=m&hl=sv&gl=SE&mapclient=embed&cid=10218917882618837757">googlemaps.com</a></p>
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
    
    export default HittaHit;