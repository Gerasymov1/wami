import React from 'react';
import Posts from './components/Posts'
import {BrowserRouter, Route} from 'react-router-dom'
import store from "./store/store";
import {Provider} from "react-redux";
import Header from "./components/Header";
import PostPage from "./components/PostPage";
import {Form} from "./components/Form";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/posts' exact={true} component={Posts}/>
                    <Route path='/post' exact={true} component={PostPage}/>
                    <Route path='/form' exact={true} component={Form}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
