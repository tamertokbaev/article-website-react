import React from 'react'
import Article from "./Article";
import Pagination from "./Pagination";
import ArticleListEmpty from "./ArticleListEmpty";
import ArticleListCreateNew from "./ArticleListCreateNew";

const ArticlesList = (props) => {
    let articles = null
    if (!props.isEmpty) {
        articles = props.data.map((article) => {
            return <Article key={article.id} id={article.id} title={article.title}
                            shortDescription={article.shortDescription} created_at={article.created_at}
                            username={article.username} image={article.image}
            />
        })
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h2 className="col-md-12 mb-4 mt-4 offset-md-1">News archive</h2>
                    {props.isAuth? <ArticleListCreateNew/> : null}
                    {props.isEmpty ? <ArticleListEmpty/> :
                        <>
                            {articles}
                            {props.enablePagination ? <Pagination meta={props.meta}/> : null}
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default ArticlesList