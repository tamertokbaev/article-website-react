import React from 'react'

const Profile = (props) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <div className="row">
                            <div className="col-4">
                                <img src={props.image} alt="profile photo" height="250"
                                     width="250" className="border border-dark"/>
                            </div>
                            <div className="col-8">
                                <h4>{props.username}</h4>
                                <p>First name: {props.firstName}</p>
                                <p>Last name: {props.lastName}</p>
                                <p>Email: {props.email}</p>
                                <p>Registration date: {props.registerDate}</p>
                                <button className="btn btn-outline-dark btn-sm">Edit profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile