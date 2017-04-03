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


var About = React.createClass({

    render: function(){

        return (
            <div className="App">
                <div className="about col-md-12">
                    <h1> About </h1>
                This site is for game lovers and people interested in
                    game reviews. Head over to the Review Page to Leave a
                     review and dont be afraid to say what you really think.
            </div>
            </div>

        );
    }
});




export default About;


