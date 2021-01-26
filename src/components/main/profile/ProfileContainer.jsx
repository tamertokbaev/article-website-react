import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import withGuestRedirect from "../../../hoc/withGuestRedirect";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import NotFound from "../../NotFound";

class ProfileContainer extends React.Component{
    componentDidMount() {

    }

    render() {
        if (this.props.match.params.username !== this.props.user.username) return <NotFound/>
        return <Profile username={this.props.user.username} firstName={this.props.user.firstname}
                        lastName={this.props.user.lastname} email={this.props.user.email}
                        registerDate={this.props.user.created_at} image={this.props.user.image} />
    }
}


let mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withGuestRedirect
)(ProfileContainer)