import React from 'react';
import Main from "./Main";
import Footer from "./Footer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Spinner from "./effects/Spinner";
import {initializedSuccess} from "../redux/mainReducers/appReducer";
import {usersAPI} from "../api/api";
import {setAuthActionCreator, setUserDataActionCreator} from "../redux/mainReducers/authReducer";
import HeaderContainer from "./HeaderContainer";


class App extends React.Component {
    async componentDidMount() {
        await usersAPI.me().then(response =>{
            if(response.data.login_status === "Authorized"){
                this.props.setUserData(response.data.user)
                this.props.setAuthState(true)
            }
        }).finally(() => {
            this.props.initializedSuccess()
        })
    }

    render() {
        return (
            <>
                <HeaderContainer/>
                {this.props.initialized ? <Main/> : <Spinner/>}
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializedSuccess: () => {
            dispatch(initializedSuccess())
        },
        setUserData: (user) => {
            dispatch(setUserDataActionCreator(user))
        },
        setAuthState: (isAuth) => {
            dispatch(setAuthActionCreator(isAuth))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(App)
