import React from "react";
import '../styles/Information.scss';
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { Output } from "../components/Output";
import { usePerson } from "../hooks/usePerson";

function Information({item}){
    const {after,before} = usePerson();
    return(
        <div className="information">
            <h1>My Profetional Profile</h1>
            <Output label='Email' output={item.email} key='Email'/>
            <Output label='Phone' output={item.phone} key='Phone'/>
            <Output label='Address' output={item.address} key='Address' />
            <Output label='Linkedin' output={<Link style='btn-primary' value='Visit' uri={item.linkedin} />} key='Linkedin'/>
            <Output label='Options' output={[<Button style='btn-secondary' value='Before' click={before} key='before'/>, <Button style='btn-primary' value='After' click={after} key='after'/>]} key='options'/>
        </div>
    )
}

export { Information };