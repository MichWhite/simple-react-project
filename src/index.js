import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsApp from './App';
import logo from './game-control-handle-icon-73482.png';
import './App.css'
import about from './about'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

var App = React.createClass({
    render : function() {
        return (

            <div className="App">
                <div className="App-header">
                    <img src={logo}  className="App-logo" alt="logo" />
                    <h2>GAME REVIEW</h2>
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
