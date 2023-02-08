import React from "react";
import '../styles/Information.scss';
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { Output } from "../components/Output";

function Information(){
    return(
        <div className="information">
            <h1>My Profetional Profile</h1>
            <Output label='Email' output='example@domain.com'/>
            <Output label='Phone' output='+52 765-203-4509'/>
            <Output label='Address' output='State of Guerrero Mexico'/>
            <Output label='Linkedin' output={<Link style='btn-primary' value='Visit' />}/>
            <Output label='Options' output={[<Button style='btn-secondary' value='Before' />, <Button style='btn-primary' value='After' />]}/>
        </div>
    )
}

export { Information };