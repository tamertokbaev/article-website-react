import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import {Form, Field} from "react-final-form";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {setAuthActionCreator, setUserDataActionCreator} from "../../redux/mainReducers/authReducer";
import {usersAPI} from "../../api/api";


class RegisterForm extends React.Component {
    onSubmit = async values => {
        let userData = {
            username: values.username,
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
        }
        let responseData = await usersAPI.register(userData)
        if (responseData.status === 200){
            if(responseData.data.message === 'The given data was invalid') return responseData.data.errors
            else if(responseData.data.register_status === 'Success'){
                localStorage.setItem('token', responseData.data.token)
                this.props.setAuthState(true)
                console.log(responseData.data.user)
                this.props.setUserData(responseData.data.user)
            }
        }
        return {username: "Some error occurred. Try again"}
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <p className="h1 offset-md-2 mt-5">Registration</p>
                        <div className="col-md-8 offset-md-2 pl-0">
                            <Form onSubmit={this.onSubmit}
                                  initialValues={{}}
                                  validate={(values) => {
                                      const errors = {}
                                      if (!values.username) errors.username = "This field is required"
                                      if (!values.firstname) errors.firstname = "This field is required"
                                      if (!values.lastname) errors.lastname = "This field is required"
                                      if (!values.email) errors.email = "This field is required"
                                      if (!values.password) errors.password = "This field is required"
                                      if (!values.password_confirmation) errors.password_confirmation = "This field is required"
                                      else if (values.password !== values.password_confirmation) errors.password = "Passwords do not match"
                                      return errors
                                  }}
                                  render={({submitError, handleSubmit, submitting, values}) => (
                                      <form onSubmit={handleSubmit}>
                                          <div className="form-group">
                                              <label htmlFor="username">Username</label>
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
                                          <div className="form-row">
                                              <div className="form-group col-md-6">
                                                  <label htmlFor="firstname">First name</label>
                                                  <Field name="firstname">
                                                      {({input, meta}) => (
                                                          <>
                                                              <input {...input} type="text" placeholder="First name"
                                                                     className={"form-control" + ((meta.error || meta.submitError) && meta.touched ? " is-invalid" : "")}/>
                                                              {(meta.error || meta.submitError) && meta.touched ?
                                                                  <div
                                                                      className="invalid-feedback">{meta.error || meta.submitError}</div> : null
                                                              }
                                                          </>
                                                      )}
                                                  </Field>
                                              </div>
                                              <div className="form-group col-md-6">
                                                  <label htmlFor="lastname">Last name</label>
                                                  <Field name="lastname">
                                                      {({input, meta}) => (
                                                          <>
                                                              <input {...input} type="text" placeholder="Last name"
                                                                     className={"form-control" + ((meta.error || meta.submitError) && meta.touched ? " is-invalid" : "")}/>
                                                              {(meta.error || meta.submitError) && meta.touched ?
                                                                  <div
                                                                      className="invalid-feedback">{meta.error || meta.submitError}</div> : null
                                                              }
                                                          </>
                                                      )}
                                                  </Field>
                                              </div>
                                          </div>
                                          <div className="form-group">
                                              <label htmlFor="email">E-mail</label>
                                              <Field name="email">
                                                  {({input, meta}) => (
                                                      <>
                                                          <input {...input} type="email" placeholder="E-Mail address"
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
                                              <label htmlFor="password">Password</label>
                                              <Field name="password">
                                                  {({input, meta}) => (
                                                      <>
                                                          <input {...input} type="password" placeholder="Password"
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
                                              <label htmlFor="password_confirmation">Password confirmation</label>
                                              <Field name="password_confirmation">
                                                  {({input, meta}) => (
                                                      <>
                                                          <input {...input} type="password"
                                                                 placeholder="Confirm password"
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
                                                  className="btn btn-block btn-outline-secondary">Register
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
    withAuthRedirect
)(RegisterForm)