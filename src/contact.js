/**
 * Created by michealin on 4/3/2017.
 */
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


var Contact = React.createClass({

    render: function(){

        return (
            <div className="App">
                <div className="about row">
                    <h1> Contact </h1>
                    <p> If anybody has any issues or any trouble with the
                        site please contact the developer at:
                    </p>
                    <table>
                        <tbody>
                        <tr>
                            Name: Michealin White
                        </tr>
                        <tr>
                            Email: mich.white@hotamil.com
                        </tr>
                        <tr>
                            Phone : 0894574204
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
});


export default Contact;


