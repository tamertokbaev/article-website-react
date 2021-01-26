import React from 'react'
import {Link, NavLink} from "react-router-dom";

// `/articles/${url.split("=")[1]}`

export const Pagination = (props) => {
    // debugger
    let links = props.meta.links.map((linkItem, index) => {
        let url = linkItem.url
        return (
            <>
                {url ?
                    <li className="page-item"><Link key={index} className="page-link" to={`/articles/page/${url.split("=")[1]}`}>{linkItem.label}</Link></li> :
                    <li className="page-item disabled"><Link key={index} className="page-link" to={'#'}>{linkItem.label}</Link></li>}
            </>
        )
    })
    return (
        <nav className="col-md-12 offset-md-1">
            <ul className="pagination">
                {links}
            </ul>
        </nav>
    )
}

export default Pagination;