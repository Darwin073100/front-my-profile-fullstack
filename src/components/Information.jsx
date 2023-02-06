import React from "react";
import '../styles/Information.scss';

function Information(){
    return(
        <div className="information">
            <h1>My Profetional Profile</h1>
            <div className="item">
                <div className="name"><span>Email</span></div>
                <div className="content"><span>example@domain.com</span></div>
            </div>
            <div className="item">
                <div className="name"><span>Phone</span></div>
                <div className="content"><span>+52 765-203-4509</span></div>
            </div>
            <div className="item">
                <div className="name"><span>Address</span></div>
                <div className="content"><span>State of Guerrero Mexico</span></div>
            </div>
            <div className="item">
                <div className="name"><span>Linkedin</span></div>
                <div className="content">
                    <button className="btn-primary">Visit Site</button>
                </div>
            </div>
            <div className="item">
                <div className="name"><span>Options</span></div>
                <div className="content">
                    <button className="btn-secondary">Before</button>
                    <button className="btn-primary">After</button>
                </div>
            </div>
        </div>
    )
}

export { Information };