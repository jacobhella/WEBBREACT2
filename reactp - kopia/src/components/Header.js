import React from "react";


class Header extends React.Component{
    render(){
        return(
            <><br /><div className="center">
                <a href="/"><img src="/files/sushibarlogo.png" alt="Company logo" className="imageresponsive" /></a>
            </div><br /><nav>
            <ul id="homenav">
              <li className="homenavbar"> <a href="Meny">MENY</a></li>
              <li className="homenavbar"> <a href="HittaHit">HITTA&nbsp;HIT</a></li>
              <li className="homenavbar"> <a href="Oppettider">ÖPPETTIDER</a></li>
              <li className="homenavbar"> <a href="Bestall">BESTÄLL&nbsp;ONLINE</a></li>
            </ul>
                </nav><br /><br /></>
        )
    }
}

export default Header;