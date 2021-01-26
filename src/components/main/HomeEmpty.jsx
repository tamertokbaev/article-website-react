import React from 'react'

const HomeEmpty = () => {
    return (
        <div className="col-md-8 offset-md-2 mt-2">
            <div className="card">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-column">
                            <div className="card-content">
                                <div className="card-title" style={{fontWeight: 600}}>
                                    There is no posts yet!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeEmpty