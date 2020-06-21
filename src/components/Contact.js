import React from 'react';
import '../App.css';
import './style.css';


const name = 'Ian Ryan';
const image = 'https://randomuser.me/api/portraits/men/83.jpg';
const status = true;


function Contact (){
    return(
        <div className="Contact">
            <img className="avatar" src={image}/>
            <div>     
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className="status-online">
                        {status? true : null }
                    </div>
                    <div className="status-text">
                        {status ? "online" : "offline"}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact ;