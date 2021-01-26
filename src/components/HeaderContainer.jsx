import React from 'react'
import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    render() {
        return <Header isAuth={this.props.isAuth} username={this.props.username} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        username: state.auth.user.username
    }
}

export default compose(
    connect(mapStateToProps)
)(HeaderContainer)