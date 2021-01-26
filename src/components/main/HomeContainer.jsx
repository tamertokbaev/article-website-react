import React from 'react';
import axios from "axios";
import Home from "./Home";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setIsEmptyActionCreator, setPostsHomePageActionCreator} from "../../redux/mainReducers/home/homeReducer";
import Spinner from "../effects/Spinner";
import {setLoadingStateActionCreator} from "../../redux/mainReducers/effectsReducer";


class HomeContainer extends React.Component {
    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/api/home")
            .then(
                response => {
                    if(response.data.length === 0){
                        this.props.setIsEmpty(true)
                    }
                    else{
                        let postsHomePage = [];
                        response.data.map((post) => {
                            postsHomePage.push({
                                id: post.id,
                                created_at: post.created_at,
                                title: post.title,
                                shortDescription: post.shortDescription,
                                username: post.username,
                                image: post.image
                            })
                            return postsHomePage
                        })
                        this.props.setPostsHomePage(postsHomePage)
                        this.props.setIsEmpty(false)
                    }
                    this.props.setLoadingState(false)
                }
            )
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
                {this.props.effects.isLoading ? <Spinner/> : <Home postsHomePage={this.props.postsHomePage} isEmpty={this.props.isEmpty}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postsHomePage: state.homePage.postsHomePage,
        isEmpty: state.homePage.isEmpty,
        effects: state.effects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPostsHomePage: (postsHomePage) => {
            dispatch(setPostsHomePageActionCreator(postsHomePage))
        },
        setIsEmpty: (isEmpty) => {
            dispatch(setIsEmptyActionCreator(isEmpty))
        },
        setLoadingState: (isLoading) => {
            dispatch(setLoadingStateActionCreator(isLoading))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeContainer));