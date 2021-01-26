import React from 'react'
import Comment from "./Comment.";

const SingleArticle = (props) => {
    let comments = props.article.comments.map((comment) => {
        return <Comment id={comment.id} created_at={comment.created_at}
                        text={comment.text} username={comment.username}
        />
    })
    return (
        <section>
            <div className="container">
                <div className="row">
                    <p className="h2 offset-md-1 mt-5 col-md-10">{props.article.title}</p>
                    <div className="col-md-10 offset-md-1 pt-2">
                        <img src={props.article.image}
                             alt="article photo" width="100%" height="400"/>
                        <p className="pt-3 h5">{props.article.shortDescription}</p>
                        <p className="pt-1 h6">{props.article.text}</p>
                        <div className="d-flex justify-content-between align-items-center pt-2">
                            <p className=""><span className="font-weigh-bold">Author:</span> {props.article.username}</p>
                            <p className="">{props.article.created_at}</p>
                        </div>
                    </div>
                    <p className="h3 offset-md-1 mt-5 col-md-10">Comments</p>
                    {comments}
                </div>
            </div>
        </section>
    )
}

export default SingleArticle;