import React from "react";
import './encabezado.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Encabezado = ()=>{


        


    return(
        <div className="encabezado">
            <div className="description">
                <div className="title">
                    <h1>Big Comeback</h1>
                </div>
                <div className="sinopsis">
                <h6>Nulla porta,eros id aliquam pulvinar urna ex mattis eros,quis vestibulum urna turpis et risus.Mauris porttitor risus faucibus,auctor arcu a.tincidunt nibh...</h6>
                </div>
                <div className="botones">
                    <button className="watch-now">WATCH NOW</button>
                    <button className="play-list">+PLAYLIST</button>
                </div>
            </div>
            <div className="media">
             <FontAwesomeIcon icon={faCirclePlay} color="#27CDF2" fontSize="10em" href="www.google.com"/>
           
            </div>
            
            
        </div>
    );
}

export default Encabezado;