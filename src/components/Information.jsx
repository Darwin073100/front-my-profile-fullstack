import React from "react";
import '../styles/Information.scss';

function Information(){
    return(
        <div class="information">
            <h1>My Profetional Profile</h1>
            <div class="item">
                <div class="name"><span>Email</span></div>
                <div class="content"><span>example@domain.com</span></div>
            </div>
            <div class="item">
                <div class="name"><span>Phone</span></div>
                <div class="content"><span>+52 765-203-4509</span></div>
            </div>
            <div class="item">
                <div class="name"><span>Address</span></div>
                <div class="content"><span>State of Guerrero Mexico</span></div>
            </div>
            <div class="item">
                <div class="name"><span>Linkedin</span></div>
                <div class="content">
                    <button class="btn-primary">Visit Site</button>
                </div>
            </div>
            <div class="item">
                <div class="name"><span>Options</span></div>
                <div class="content">
                    <button class="btn-secondary">Before</button>
                    <button class="btn-primary">After</button>
                </div>
            </div>
        </div>
    )
}

export { Information };