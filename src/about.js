/**
 * Created by michealin on 4/2/2017.
 */
'use strict';
import _ from 'lodash';

import React, { Component } from 'react';
import './App.css';
import buttons from './config/buttonsConfig';
import api from './test/stubAPI.js'
import './App.css'
import { Link } from 'react-router';


var About = React.createClass({

    render: function(){

        return (
            <div className="App">
                <div className="about row">
                    <h1> About </h1>
               <p> This site is for game lovers and people interested in
                    game reviews. Head over to the <Link to={'/'}> Review Page</Link>
                     to Leave a review and say what you really think. On the review page add
                   the Title, Review, Age, Platform and Price.
               </p>
                </div>
            </div>

        );
    }
});




export default About;


