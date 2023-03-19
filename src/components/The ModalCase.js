import React from "react";
import './style.css'
export default function ModalCase({setIsOpen,film}){
    return(
        <div className="modal-show" onClick={()=> setIsOpen(false)}>
            <div id="modal1" className="modal" style={{display:'block', top:'8%',backgroundColor:'white' }} >
                <div className="modal-content" style={{backgroundColor:'white'}}>
                    <h1 style={{color:'black'}}>Film name: {film.title}</h1>
                    <p><iframe width="100%" height="400px" src={film.clip} title={film.title} frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/> </p>
                </div>
            <div className="modal-footer" style={{backgroundColor:'white'}}>
                <button className="modal-close red-text" style={{backgroundColor:'white',fontSize:'30px'}}>Close</button>
                </div>
            </div>
        </div>
    )
}