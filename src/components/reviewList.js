/**
 * Created by michealin on 3/14/2017.
 */
import React, {Component} from 'react';
import _ from 'lodash';
import Reviewlist from '../Data.js'


var Reviews = React.createClass({

    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    getInitialState: function() {
        return {
            counter: 0
        }
    },

    render: function() {
        var data = this.props.data;
        var reviewTemplate;

        if (data.length > 0) {
            reviewTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Reviewlist data={item} />
                    </div>
                )
            })
        } else {
            reviewTemplate = <p>No Reviews Yet</p>

        }
        return (
            <div className='review'>
                {reviewTemplate}
                <strong className={'review__count ' + (data.length > 0 ? '':'none')}>
                    Reviews total: {data.length}</strong>
            </div>
        );
    }
});