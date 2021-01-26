import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if(this.props.isAuth) return <Redirect to="/"/>
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export default withAuthRedirect