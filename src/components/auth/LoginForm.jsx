import React from 'react'
import {Form, Field} from 'react-final-form'
import {connect} from "react-redux";
import {setAuthActionCreator, setUserDataActionCreator} from "../../redux/mainReducers/authReducer";
import {usersAPI} from "../../api/api";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class LoginForm extends React.Component {
    onSubmit = async values => {
        const errors = {}
        let loginData = {
            username: values.username,
            password: values.password
        }
        await usersAPI.getCSRF().then(async response => {
            let responseData = await usersAPI.login(loginData)
            if (responseData.data.login_status === "Success"){
                localStorage.setItem('token', responseData.data.token)
                this.props.setAuthState(true)
                this.props.setUserData(responseData.data.user)
            }
            else if(responseData.data.login_status === "Incorrect data") errors.username = "Invalid username or password"
        }).catch(err => errors.username = "Something went wrong")
        return errors
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <p className="h1 offset-md-2 mt-5">Sign in</p>
                        <div className="col-md-8 offset-md-2 pl-0">
                            <Form
                                onSubmit={this.onSubmit}
                                initialValues={{}}
                                validate={
                                    values => {
                                        const errors = {}
                                        if (!values.username) {
                                            errors.username = "This field is required"
                                        }
                                        if (!values.password) {
                                            errors.password = "This field is required"
                                        }
                                        return errors
                                    }
                                }
                                render={({submitError, handleSubmit, submitting, values}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <Field name="username">
                                                {({input, meta}) => (
                                                    <>
                                                        <input {...input} type="text" placeholder="Username"
                                                               className={"form-control" + ((meta.error || meta.submitError) && meta.touched ? " is-invalid" : "")}/>
                                                        {(meta.error || meta.submitError) && meta.touched ?
                                                            <div
                                                                className="invalid-feedback">{meta.error || meta.submitError}</div> : null
                                                        }
                                                    </>
                                                )}
                                            </Field>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field name="password">
                                                {({input, meta}) => (
                                                    <>
                                                        <input {...input} type="password"
                                                               placeholder="Password"
                                                               className={"form-control" + ((meta.error || meta.submitError) && meta.touched ? " is-invalid" : "")}/>
                                                        {(meta.error || meta.submitError) && meta.touched ?
                                                            <div
                                                                className="invalid-feedback">{meta.error || meta.submitError}</div> : null
                                                        }
                                                    </>
                                                )}
                                            </Field>
                                        </div>
                                        <button type="submit" disabled={submitting}
                                                className="btn btn-block btn-outline-secondary">Log In
                                        </button>
                                    </form>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
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
    withAuthRedirect
)(LoginForm)
