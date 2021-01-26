import React from 'react'

const Comment = (props) => {
    return (
        <div className="col-md-10 offset-md-1 pt-2">
            <div className="border border-dark rounded p-3">
                <div className="d-flex flex-column">
                    {props.text}
                    <div className="d-flex justify-content-between align-items-center pt-2">
                        <small className="text-muted">{props.username}</small>
                        <small className="text-muted">{props.created_at}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment