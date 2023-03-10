import React from 'react'
import '../styles/Card.scss';
import { Link } from './Link';

function Card({item}) {
  return (
    <article className="card">
            <div className="card-header">
                <div className="settings">
                    <div>
                        <img src={item.language.uriImg} alt={item.language.name} />
                        <h3>{item.language.name}</h3><span>({item.language.version})</span>
                    </div>
                    <div>
                        <img src={item.framework.uriImg} alt={item.framework.uriImg} />
                        <h3>{item.framework.name}</h3><span>{item.framework.version}</span>
                    </div>
                </div>
                <div className="title">
                    <h3>{item.name}</h3>
                </div>
            </div>
            <div className="card-body">
                <p>{item.description}</p>
            </div>
            <div className="card-footer">
            <Link value='Visit Project' style='btn-secondary' uri={item.uriProject}/>
                <h4>Created</h4>
                <span>{item.createAt}</span>
            </div>
        </article>
  )
}

export { Card };