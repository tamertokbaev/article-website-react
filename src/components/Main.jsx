import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomeContainer from "./main/HomeContainer";
import SingleArticleContainer from "./main/SingleArticleContainer";
import ArticlesListContainer from "./main/articles/ArticlesListContainer";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import NotFound from "./NotFound";
import LogoutComponent from "./auth/LogoutContainer";
import ProfileContainer from "./main/profile/ProfileContainer";
import ArticleCreateForm from "./main/articles/ArticleCreateForm";

const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} render={() => <HomeContainer/> } />
                <Route exact path={'/articles/create'} render={() => <ArticleCreateForm/>} />
                <Route exact path={"/articles/:id(\d+)"} render={() => <SingleArticleContainer/>} />
                <Route path={'/articles/(page)?/:pageNumber?'} render={() => <ArticlesListContainer/>} />
                <Route path={'/login'} render={() => <LoginForm/>}/>
                <Route path={'/register'} render={() => <RegisterForm/>}/>
                <Route path={'/logout'} render={() => <LogoutComponent/>}/>
                <Route exact path={'/profile/:username'} render={() => <ProfileContainer/>} />
                <Route path={'*'} render={() => <NotFound/>}/>
            </Switch>
        </>
    )
}

export default Main;
