import React from 'react';
import HomePost from "./HomePost";
import HomeEmpty from "./HomeEmpty";

const Home = (props) => {
    let homePagePosts = null
    if (props.isEmpty === false) {
        homePagePosts = props.postsHomePage.map((post) => {
            return <HomePost key={post.id} title={post.title} shortDescription={post.shortDescription}
                             username={post.username}
                             created_at={post.created_at} image={post.image} id={post.id}
            />
        })
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h2 className="col-md-8 offset-md-2 mt-4">Latest News</h2>
                    {props.isEmpty ? <HomeEmpty/> : homePagePosts}
                </div>
            </div>
        </section>
    );
}

export default Home;