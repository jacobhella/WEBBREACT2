import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div id="footer">
            <p>KONTAKT<br />
            </p><p>090 13 52 10<br />
              <a href="mailto:info@seastreet.se" style={{textDecoration: 'none'}}>info@seastreet.se</a></p>
            </div>
        )
    }
}

export default Footer;