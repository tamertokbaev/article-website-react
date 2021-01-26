import React from 'react'
import {compose} from "redux";
import withGuestRedirect from "../../../hoc/withGuestRedirect";
import {Field, Form} from 'react-final-form'
import {articlesAPI} from "../../../api/api";
import {Redirect} from "react-router-dom";


class ArticleCreateForm extends React.Component {
    state = {
        image: null,
        file: null,
        error: null,
        id: null
    }

    onSubmit = async values => {
        if (!this.state.file) {
            this.setState({error: "This field is required"})
            return null
        }
        let articleFormData = new FormData()
        articleFormData.append("title", values.title)
        articleFormData.append("shortDescription", values.shortDescription)
        articleFormData.append("text", values.content)
        articleFormData.append("image", this.state.file)
        await articlesAPI.createArticle(articleFormData)
            .then(response => {
                if (response.data.message === "Success") {
                    this.setState({id: response.data.article.id})
                } else if (response.data.message === "The given data was invalid") {
                    console.log(response)
                    return response.data.errors
                }
            })
            .catch(err => console.log(err))
    }

    imageHandler = (event) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({image: reader.result})
                this.setState({file: event.target.files[0]})
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    imageChecker = (event) => {
        if (!event.target.files[0]) this.setState({error: "This field is required"})
        else this.setState({error: null})
    }

    render() {
        return (
            <>
                {this.state.id ? <Redirect to={`articles/${this.state.id}`}/> : null}
                <section className="registration">
                    <div className="container">
                        <div className="row">
                            <p className="h1 offset-md-2 mt-5">Create post</p>
                            <div className="col-md-8 offset-md-2 pl-0">
                                <Form
                                    onSubmit={this.onSubmit}
                                    initialValues={{}}
                                    validate={values => {
                                        const errors = {}
                                        if (!values.title) errors.title = "This field is required"
                                        if (!values.shortDescription) errors.shortDescription = "This field is required"
                                        if (!values.content) errors.content = "This field is required"
                                        // if (!values.image) errors.image = "This field is required"
                                        return errors
                                    }}
                                    render={({handleSubmit, submitting, values}) => (
                                        <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="title">Title</label>
                                                <Field name="title">
                                                    {({input, meta}) => (
                                                        <>
                                                            <input {...input} type="text"
                                                                   className={"form-control" + ((meta.error || meta.submitError) && meta.touched ? " is-invalid" : "")}
                                                                   placeholder="Title"/>
                                                            <div className="invalid-feedback">
                                                                {meta.error || meta.submitError}
                                                            </div>
                                                        </>
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="shortDescription">Short description</label>
                                                <Field name="shortDescription">
                                                    {({input, meta}) => (
                                                        <>
                                                            <input {...input} type="text"
                                                                   className={"form-control" + ((meta.error || meta.submitError) && meta.touched ? " is-invalid" : "")}
                                                                   placeholder="Short description"/>
                                                            <div className="invalid-feedback">
                                                                {meta.error || meta.submitError}
                                                            </div>
                                                        </>
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="text">Content</label>
                                                <Field name="content">
                                                    {({input, meta}) => (
                                                        <>
                                                        <textarea {...input}
                                                                  className={"form-control" + ((meta.error || meta.submitError) && meta.touched ? " is-invalid" : "")}
                                                                  placeholder="Content" rows="3"/>
                                                            <div className="invalid-feedback">
                                                                {meta.error || meta.submitError}
                                                            </div>
                                                        </>
                                                    )}
                                                </Field>
                                            </div>
                                            {!this.state.image ? null :
                                                <img src={this.state.image} width="350" height="250"
                                                     className="border-dark"/>}
                                            <div className="form-group">
                                                <label htmlFor="image">Post image</label>
                                                <input type="file"
                                                       className={"form-control-file" + (this.state.error ? " is-invalid" : "")}
                                                       accept="image/*"
                                                       onChange={this.imageHandler} onBlur={this.imageChecker}/>
                                                <div className="invalid-feedback">
                                                    {this.state.error}
                                                </div>
                                            </div>
                                            <button type="submit" disabled={submitting}
                                                    className="btn btn-dark btn-block">Create
                                            </button>
                                        </form>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default compose(
    withGuestRedirect
)(ArticleCreateForm)