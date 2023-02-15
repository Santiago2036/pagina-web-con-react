import React from "react";
import './carrusel1.css'
import { useState } from "react";
import { motion} from "framer-motion";



const Carrusel = ({imagenes})=>{

    return(
            
                <motion.div className="slider-container">
                    <motion.div className="slider" drag="x" dragConstraints={{right:0,left:-800}}>

                        {imagenes.map(imagen=>(
                            <motion.div className="item">
                    
                                <img 
                                    className='imagen-ejemplo'
                                    src={require(`../imagenes/${imagen.name}`)}
                                    alt='Foto de ejemplo'
                                />
                                <p className="description">{imagen.description}</p>
                                <p className="titulo-imagen">{imagen.title}</p>

                            </motion.div>
    ))}
                    </motion.div> 
                </motion.div>
        
        );
}

export default Carrusel;