import React from 'react'
import {NavLink} from "react-router-dom";

const Article = (props) => {
    return (
        <div className="col-md-10 offset-md-1">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{props.title}</h3>
                    <p className="card-text mb-auto">{props.shortDescription}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p><small className="text-muted">{props.username}</small></p>
                        <p><small className="text-muted">{props.created_at}</small></p>
                    </div>
                    <NavLink to={`/articles/${props.id}`} className="stretched-link">Continue reading</NavLink>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={props.image} alt="" width="300" height="300"/>
                </div>

            </div>
        </div>
    )
}

export default Article;