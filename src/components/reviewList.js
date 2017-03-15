/**
 * Created by michealin on 3/14/2017.
 */
import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ReviewList from './reviews';
import { getProducts } from '../Data';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(ReviewList);
