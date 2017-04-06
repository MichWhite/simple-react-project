import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsApp from './App';
import logo from './game-control-handle-icon-73482.png';
import './App.css'
import about from './about'
import contact from './contact'
import login from './login'
import signup from './sign-up'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Link, IndexLink } from 'react-router';

var App = React.createClass({
    render : function() {
        return (




            <div className="App">
                <div className="App-header">
                    <img src={logo}  className="App-logo" alt="logo" />
                    <h2>GAME REVIEW</h2>
                </div>
                <div className="links">
                    <div className="top-bar-left">
                        <IndexLink to="/">Review Page</IndexLink>
                          |      |
                        <Link to='/about'> About Page</Link>
                          |      |
                        <Link to='/contact'> Contact Page</Link>

                    </div>

                    <div className="top-bar-right">
                        {/*<Link to="/login">Log in</Link>*/}
                        {/*<Link to="/sign-up">Sign up</Link>*/}
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
});

ReactDOM.render( (
        <Router history={browserHistory} >
            <Route path="/" component={App}>
                <IndexRoute component={ReviewsApp}/>
                <Route path="about" component={about} />
                <Route path="contact" component={contact} />
                <Route path="sign-up" component={signup} />
                <Route path="login" component={login} />
            </Route>
        </Router>
    ),
    document.getElementById('root')
);
//
// ReactDOM.render(
//
//     <ReviewsApp/>,
//     document.getElementById('root')
// );
//
