import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import {setAuthActionCreator, setUserDataActionCreator} from "../../redux/mainReducers/authReducer";
import {Redirect} from "react-router-dom";
import withGuestRedirect from "../../hoc/withGuestRedirect";
import {usersAPI} from "../../api/api";

class LogoutContainer extends React.Component {
    componentDidMount() {
        Promise.all([usersAPI.logout()]).finally(() => {
            localStorage.removeItem('token')
            this.props.setAuthState(false)
            this.props.setUserData({username: ""})
        })
    }

    render() {
        return <Redirect to={'/'}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setAuthState: (isAuth) => {
            dispatch(setAuthActionCreator(isAuth))
        },
        setUserData: (user) => {
            dispatch(setUserDataActionCreator(user))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withGuestRedirect
)(LogoutContainer)
