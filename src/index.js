import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NoMatch from './pages/404';
import App from './demo_page/index';
import HomeOne from './home-one';
import HomeTwo from './home-two';
import HomeThree from './home-three';
import BlogDetails from './blog/blog-details';
import BlogList from './blog/blog-list';
import BlogLeftSidebar from './blog/blog-leftsidebar';
import BlogRightSidebar from './blog/blog-rightsidebar';
import BlogLeftside from './blog/blog-leftside';
import BlogRightside from './blog/blog-rightside';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import ForgetPassword from './pages/forget-pwd';
import ThankYou from './pages/thank-you';
import Review from './pages/review';
import PageNotFound from './pages/404';
import Faq from './pages/faq';
import Download from './pages/download';
import ComingSoon from './pages/coming-soon';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import CreatePost from './components/Dashboard/Blog/CreatePost'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import Dashboard from './components/Dashboard/Dashboard'
import Blog from './components/blog'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig), // redux binding for firebase
    reactReduxFirebase(fbConfig) // redux bindings for firestore
  )
);

class Root extends React.Component {

  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={App}/>
			  <Route path={`${process.env.PUBLIC_URL}/home-one`} component={HomeOne}/>
			  <Route path={`${process.env.PUBLIC_URL}/home-two`} component={HomeTwo}/>
			  <Route path={`${process.env.PUBLIC_URL}/home-three`} component={HomeThree}/>
			  <Route path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>
			  <Route path={`${process.env.PUBLIC_URL}/blog-list`} component={BlogList}/>
			  <Route path={`${process.env.PUBLIC_URL}/blog-left-sidebar`} component={BlogLeftSidebar}/>
			  <Route path={`${process.env.PUBLIC_URL}/blog-right-sidebar`} component={BlogRightSidebar}/>
			  <Route path={`${process.env.PUBLIC_URL}/blog-leftside`} component={BlogLeftside}/>
			  <Route path={`${process.env.PUBLIC_URL}/blog-rightside`} component={BlogRightside}/>
			  <Route path={`${process.env.PUBLIC_URL}/sign-in`} component={SignIn}/>
			  <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp}/>
			  <Route path={`${process.env.PUBLIC_URL}/forget-password`} component={ForgetPassword}/>
			  <Route path={`${process.env.PUBLIC_URL}/thank-you`} component={ThankYou}/>
			  <Route path={`${process.env.PUBLIC_URL}/review`} component={Review}/>
			  <Route path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
			  <Route path={`${process.env.PUBLIC_URL}/faq`} component={Faq}/>
			  <Route path={`${process.env.PUBLIC_URL}/download`} component={Download}/>
			  <Route path={`${process.env.PUBLIC_URL}/coming-soon`} component={ComingSoon}/>
			  <Route path={`${process.env.PUBLIC_URL}/create-post`} component={CreatePost} />
        <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
        
			  <Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
  	);
  }
 }


ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

registerServiceWorker();
