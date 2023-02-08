import React from "react";
import '../styles/Information.scss';
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { Output } from "../components/Output";

function Information({data}){
    return(
        <div className="information">
            <h1>My Profetional Profile</h1>
            <Output label='Email' output={data.email} key={data.id+1}/>
            <Output label='Phone' output={data.phone} key={data.id+2}/>
            <Output label='Address' output={data.address} key={data.id+3}/>
            <Output label='Linkedin' output={<Link style='btn-primary' value='Visit' uri={data.linkedin} />} key={data.id+4}/>
            <Output label='Options' output={[<Button style='btn-secondary' value='Before' />, <Button style='btn-primary' value='After' />]} key={data.id+5}/>
        </div>
    )
}

export { Information };