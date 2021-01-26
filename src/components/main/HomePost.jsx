import React from 'react'
import {NavLink} from "react-router-dom";

const HomePost = (props) => {
    return (
        <div className="col-md-8 offset-md-2 mt-2">
            <div className="card">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-column">
                            <div className="card-content">
                                <div className="card-title" style={{fontWeight: 600}}>
                                    <NavLink to={`/articles/${props.id}/`}>
                                        {props.title}
                                    </NavLink>
                                </div>
                                <div className="card-text">
                                    {props.shortDescription}
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p><small className="text-muted">{props.username}</small></p>
                                <p><small className="text-muted">{props.created_at}</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={props.image} width={200} height={200} className="card-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePost;