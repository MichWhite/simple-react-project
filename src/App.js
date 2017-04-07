'use strict';
import _ from 'lodash';

import React, { Component } from 'react';
import './App.css';
import buttons from './config/buttonsConfig';
import api from './test/stubAPI.js'

// var mongoose = require('mongoose');
//
// mongoose.connect('mongodb://admin:admin@ds151070.mlab.com:51070/game-review');
//
// mongoose.find(function (err, game) {
//     if (err) {
//         res.status(500).send(err)
//     } else {
//         res.send(game);
//     }
// });

var reviews = api.getAll();

var SelectBox = React.createClass({
    handleChange : function(e, type,value) {
        e.preventDefault();
        this.props.onUserInput( type,value);
    },
    handleTextChange : function(e) {
        this.handleChange( e, 'search', e.target.value);
    },
    handleSortChange : function(e) {
        this.handleChange(e, 'sort', e.target.value);
    },
    render: function(){
        return (
            <div className="col-md-10">
                <input type="text" placeholder="Search"
                       value={this.props.filterText}
                       onChange={this.handleTextChange} />
                 Sort by:
                <select id="sort" value={this.props.order }
                        onChange={this.handleSortChange} >
                    <option value="name">Alphabetical</option>
                    <option value="age">Age Rating </option>
                </select>
            </div>
        );
    }
});

var ReviewForm = React.createClass({
    render: function(){
        return (
            // <formCreate/>
            <tbody>
            <tr>
                <td>
                    <h4>Name of Game</h4>
                    <br/>
                    <input type="text" placeholder="Battlefield 1" ref="name" name="name" id="name" required="required"/>
                </td>
            </tr>
                <tr>
                <td>
                    <h4>Review</h4>
                <br/>
            <textarea
        className='add__comment' defaultValue=''
        placeholder='Good Game, Great Graphics' ref='review' name="review" id="review" required="required" width="300px">
            </textarea>
                </td>
                </tr>
                <tr>
                <td>

            <h4>Price of Game</h4>
        <input type="number" step="0.01" min="0.01" placeholder="50.99" ref='price' name="price" id="price" required="required" />

                </td>
                </tr>
            <tr>
            <td>
                <h4>Age Rating</h4>
                <select ref="age">
                    <option value="3">3</option>
                    <option value="7">7</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                </select>
            </td>
            </tr>
            <tr>
            <td>
                <h4>Platform</h4>
                <select ref="platform">
                    <option value="XBOX ONE">XBOX ONE</option>
                    <option value="PS4">PLAYSTATION 4</option>
                    <option value="XBOX 360">XBOX 360</option>
                    <option value="PS3">PLAYSTATION 3</option>
                    <option value="WII">WII</option>
                    <option value="PC">PC</option>
                </select>

            </td>
            </tr>
            <tr>
            <td><button onClick={this.addDetails}>ADD REVIEW</button ></td>
            </tr>

            </tbody>
        )
    },
    addDetails : function(event) {
        event.preventDefault();
        let name = this.refs.name.value;
        let review = this.refs.review.value;
        let price = this.refs.price.value;
        let age = this.refs.age.value;
        let platform =  this.refs.platform.value;


        let key = reviews.length+1;

        var item = [{
            name: name,
            review: review,
            price: price,
            age: age,
            platform: platform
        }];

        if (!name || !review || !price) {
            return;
        }

        this.props.addHandler(key, name,review,price, age, platform);
        this.setState({name: '', review: '', price: ''});
        this.setState({status : ''} );
        // this.props.updateHandler(key,
        //     name,review,price,age,platform);

        // console.log(key);
        // api.add(key, name,review,price,age,platform);
        // reviews.push({id: key, name: name, review : review, price: price, age: age, platform: platform});
        // console.log(reviews);

    }


});


var Review = React.createClass({

getInitialState : function() {

    return {
            status : '',
        name: this.props.reviewItem.name,
        id: this.props.reviewItem.id,
            review: this.props.reviewItem.review,
        price: this.props.reviewItem.price,
        age: this.props.reviewItem.age,
        platform: this.props.reviewItem.platform
        } ;
    },
    handleEdit : function() {
        this.setState({ status : 'edit'} )
    },
    handleCancel : function() {
        this.setState({ status : '',
            name: this.props.reviewItem.name,
            id: this.props.reviewItem.id,
            review: this.props.reviewItem.review,
            price: this.props.reviewItem.price,
            age: this.props.reviewItem.age,
            platform: this.props.reviewItem.platform} ) ;
    },
    handleSave : function(e) {
        e.preventDefault();

        var name = this.state.name.trim();
        var review = this.state.review.trim();
        var price = this.state.price.trim();
        var age = this.state.age.trim();
        var platform = this.state.platform.trim();
        if (!name || !review || !price || !age || !platform) {
            return;
        }
        this.setState({status : ''} );
console.log(this.props.reviewItem.id);
console.log(this.state.id);
// console.log(this.state.id.trim());
       this.props.updateHandler(
           this.props.reviewItem.id,
           this.state.id,
           name,review,price,age,platform);

    },
    handleConfirm : function(e) {
        this.props.deleteHandler(this.props.reviewItem.id) ;
    },
    handleNameChange: function(e) {
        this.setState({name: e.target.value});
    },
    handleDelete : function() {
        this.setState({ status : 'del'} )
    },

    handleReviewChange: function(e) {
        this.setState({review: e.target.value});
    },
    handlePriceChange: function(e) {
        this.setState({price: e.target.value});
    },

    handleAgeChange: function(e) {
        this.setState({age: e.target.value});
    },
    handlePlatformChange: function(e) {
        this.setState({platform: e.target.value});
    },
    render: function(){
           var activeButtons = buttons.normal ;
            var leftButtonHandler = this.handleEdit ;
            var rightButtonHandler = this.handleDelete ;

            var fields = [
                <tr ><h3><td key={'name'} >{this.props.reviewItem.name}</td> </h3></tr>,

                <tr > <td key={'review'}>{this.props.reviewItem.review}</td> </tr>,

                <tr ><td key={'price'}>€ {this.props.reviewItem.price}</td> </tr>,

                <tr ><td key={'age'}>{this.props.reviewItem.age}</td> </tr>,

                <tr ><td  key={'platform'}>{this.props.reviewItem.platform}</td> </tr>
            ] ;
            if (this.state.status === 'del' ) {
                activeButtons = buttons.delete ;
                leftButtonHandler = this.handleCancel;
                rightButtonHandler = this.handleConfirm ;
            } else if (this.state.status === 'edit' ) {
                activeButtons = buttons.edit ;
                leftButtonHandler = this.handleSave;
                rightButtonHandler = this.handleCancel ;
                fields = [
                    <tr >
                        <td key={'name'}><input type="text" className="form-control"
                                                value={this.state.name}
                                                onChange={this.handleNameChange} /> </td></tr>,
                    <tr > <td key={'review'}><input type="text" className="form-control"
                                                    value={this.state.review}
                                                    onChange={this.handleReviewChange} /> </td></tr>,
                    <tr ><td key={'price'}><input type="text" className="form-control"
                                                  value={this.state.price}
                                                  onChange={this.handlePriceChange} /> </td></tr>,
                    <tr > <td key={'age'}  value={this.state.age}
                              onChange={this.handleAgeChange} >
                        <select ref="age" className="form-control">
                            <option value="3">3</option>
                            <option value="7">7</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="18">18</option>
                        </select></td></tr>,

                    <td key={'platform'}>
                        <select ref="platform" className="form-control"
                                value={this.state.platform}
                                onChange={this.handlePlatformChange} >
                            <option value="XBOX ONE">XBOX ONE</option>
                            <option value="PS4">PLAYSTATION 4</option>
                            <option value="XBOX 360">XBOX 360</option>
                            <option value="PS3">PLAYSTATION 3</option>
                            <option value="WII">WII</option>
                            <option value="PC">PC</option>
                        </select>
                    </td>
                ] ;
            }
        return (

                    <tr  id="nameData">
                       <td>
                {fields}
                       </td>
                <tr>
                <td>
                    <input type="button" className={'btn ' + activeButtons.leftButtonColor}
                           value={activeButtons.leftButtonVal}
                           onClick={leftButtonHandler} />
                </td>
                </tr>
                        <tr>

                <td>
                    <input type="button" className={'btn ' + activeButtons.rightButtonColor}
                           value={activeButtons.rightButtonVal}
                           onClick={rightButtonHandler} />
                </td>
                </tr>

                    </tr>
        ) ;
    }
});

var ReviewFormContainer = React.createClass({
    render: function(){
        return (
    <table className="reviewForm">
    <ReviewForm addHandler={this.props.addHandler} />
</table>
        )}

});

var ReviewList = React.createClass({

    getInitialState: function() {
        return { search: '', sort: 'name' } ;
    },
    handleChange : function(type,value) {
        if ( type === 'search' ) {
            this.setState( { search: value } ) ;
        } else {
            this.setState( { sort: value } ) ;
        }
    },
    render: function(){
        var list = reviews.filter(function(p) {
            return p.name.toLowerCase().search(
                    this.state.search.toLowerCase() ) !== -1 ;
        }.bind(this) );
        var filteredList = _.sortBy(list, this.state.sort) ;




        return (

          <tbody  id="AHH">
          <SelectBox onUserInput={this.handleChange }
                     filterText={this.state.search}
                     sort={this.state.sort} />
          <FilteredReviewList reviews={filteredList}
                              deleteHandler={this.props.deleteHandler}
                              addHandler={this.props.addHandler}
                              updateHandler={this.props.updateHandler}/>

          {/*{reviewRows}*/}
          </tbody>

        ) ;
    }
});

var FilteredReviewList = React.createClass({
    render: function(){

        var reviewRows = this.props.reviews.map(function(reviewItem){
            return (
                <Review key={reviewItem.id}  reviewItem={reviewItem}

                        deleteHandler={this.props.deleteHandler}
                        addHandler={this.props.addHandler}
                        updateHandler={this.props.updateHandler}/>
            ) ;
        }.bind(this) );
        return (
            <div className="col-md-10">
                <ul className="reviews">
                    {reviewRows}
                </ul>
            </div>
        ) ;
    }
});



var ReviewsTable = React.createClass({

    render: function(){
        return (
            <table className="reviewTable">

                <ReviewList reviews={reviews}
                            deleteHandler={this.props.deleteHandler}
                            addHandler={this.props.addHandler}
                            updateHandler={this.props.updateHandler}/>
        </table>

        );
    }
});


var ReviewsApp = React.createClass({

    updateReview : function(key, id, n,r,p,Addage, plat) {
        if(api.update(key,id, n,r,p,Addage,plat))  {
            this.setState({});
        }
    },


    addReview : function(key, n,r,p,Addage, plat) {
        api.add(key, n,r,p,Addage, plat);
        this.setState({});

    },
    deleteReview : function(k) {
        api.delete(k);
        this.setState( {} ) ;

    },

    render: function(){

        return (
        <div className="App">


            <div className="row">
                <div className="col-md-4">

                    <ReviewFormContainer addHandler={this.addReview}/>
                </div>

                <div className="col-md-6">


                    <ReviewsTable reviews={reviews}
                                   updateHandler={this.updateReview}
                                  deleteHandler={this.deleteReview}
                                  addHandler={this.addReview}/>
                </div>
            </div>

                     </div>

                   );
    }
});





export default ReviewsApp;


