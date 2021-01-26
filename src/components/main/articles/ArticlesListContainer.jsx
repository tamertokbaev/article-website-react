import React from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import axios from 'axios'
import ArticlesList from "./ArticlesList";
import {setLoadingStateActionCreator} from "../../../redux/mainReducers/effectsReducer";
import {
    setArticleListPaginationActionCreator,
    setIsEmptyActionCreator
} from "../../../redux/mainReducers/articles/articleListReducer";
import Spinner from "../../effects/Spinner";

class ArticlesListContainer extends React.Component {
    componentDidMount() {
        console.log("ArticleListContainer")
        let pageNumber = this.props.match.params.pageNumber
        if (pageNumber === 'undefined') {
            pageNumber = '1'
        }
        axios
            .get(`http://127.0.0.1:8000/api/articles/?page=${pageNumber}`)
            .then(response => {
                console.log(response)
                if(response.data.data.length === 0) this.props.setIsEmpty(true)
                else this.props.setArticleListPagination(response.data.data, response.data.links, response.data.meta)
                this.props.setLoadingState(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.pageNumber !== prevProps.match.params.pageNumber) {
            let pageNumber = this.props.match.params.pageNumber
            if (pageNumber === 'undefined') {
                pageNumber = '1'
            }
            axios
                .get(`http://127.0.0.1:8000/api/articles/?page=${pageNumber}`)
                .then(response => {
                    this.props.setArticleListPagination(response.data.data, response.data.links, response.data.meta)
                    this.props.setLoadingState(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    componentWillUnmount() {
        this.props.setLoadingState(true)
    }

    render() {
        return (
            <>
                {this.props.effects.isLoading ? <Spinner/> :
                    <ArticlesList data={this.props.articleList.data} links={this.props.articleList.links}
                                  meta={this.props.articleList.meta} isEmpty={this.props.isEmpty} isAuth={this.props.isAuth} />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.articleList,
        effects: state.effects,
        isEmpty: state.articleList.isEmpty,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setArticleListPagination: (data, links, meta) => {
            dispatch(setArticleListPaginationActionCreator(data, links, meta))
        },
        setLoadingState: (isLoading) => {
            dispatch(setLoadingStateActionCreator(isLoading))
        },
        setIsEmpty: (isEmpty) => {
            dispatch(setIsEmptyActionCreator(isEmpty))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticlesListContainer))