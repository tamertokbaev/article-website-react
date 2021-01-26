import React from 'react'
import {NavLink} from "react-router-dom";
import {compose} from "redux";


const ArticleListCreateNew = () => {
    return (
        <div className="offset-md-1 col-md-10 pb-3">
            <p className="h4">Want to create article?</p>
            <NavLink to="/articles/create" className="btn btn-secondary">Create article</NavLink>
        </div>
    )
}

export default ArticleListCreateNew