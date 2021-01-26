import React from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import axios from "axios";
import SingleArticle from "./SingleArticle";
import {setArticleSingleActionCreator} from "../../redux/mainReducers/articles/articleSingleReducer";
import {setLoadingStateActionCreator} from "../../redux/mainReducers/effectsReducer";
import Spinner from "../effects/Spinner";


class SingleArticleContainer extends React.Component {
    componentDidMount() {
        let articleID = this.props.match.params.id
        axios
            .get(`http://127.0.0.1:8000/api/articles/${articleID}`)
            .then(
                response => {
                    let article = {
                        id: response.data.id,
                        created_at: response.data.created_at,
                        title: response.data.title,
                        shortDescription: response.data.shortDescription,
                        text: response.data.text,
                        username: response.data.username,
                        image: response.data.image,
                        comments: response.data.comments
                    }
                    this.props.setArticleSinglePage(article)
                    this.props.setLoadingState(false)
                })
            .catch((err) => {
                console.log(err)
            })
    }

    componentWillUnmount() {
        this.props.setLoadingState(true)
    }

    render() {
        return (
            <>
                {this.props.effects.isLoading ? <Spinner/> : null}
                <SingleArticle article={this.props.article}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.singleArticle.article,
        effects: state.effects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setArticleSinglePage: (article) => {
            dispatch(setArticleSingleActionCreator(article))
        },
        setLoadingState: (isLoading) => {
            dispatch(setLoadingStateActionCreator(isLoading))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleArticleContainer))
