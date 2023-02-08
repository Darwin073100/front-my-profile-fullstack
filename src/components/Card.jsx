import React from 'react'
import '../styles/Card.scss';
import { Link } from './Link';

function Card() {
  return (
    <article className="card">
            <div className="card-header">
                <div className="settings">
                    <div>
                        <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png" alt="card" />
                        <h3>Languages</h3><span>(version)</span>
                    </div>
                    <div>
                        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" alt="card" />
                        <h3>framework</h3><span>(version)</span>
                    </div>
                </div>
                <div className="title">
                    <h3>Project Title</h3>
                </div>
            </div>
            <div className="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci et dolores quasi officia
                    reprehenderit dolorum. Doloribus dolor assumenda animi nam reiciendis, vel minus blanditiis 
                    deleniti, quae eum, atque fuga repellat!
                </p>
                <Link value='Visit Project' style='btn-secondary'/>
            </div>
            <div className="card-footer">
                <h4>Created</h4>
                <span>2023-02-05T04:53:49.404Z</span>
            </div>
        </article>
  )
}

export { Card };