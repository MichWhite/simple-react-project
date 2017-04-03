/**
 * Created by michealin on 3/13/2017.
 */
import React, {Component} from 'react';
import _ from 'lodash';
import './formcreate.css';


class FormCreate extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (

            <form onSubmit={this.handleCreate.bind(this)}>
                <h4>Name of Game</h4>
                <input type="text" placeholder="Battlefield 1" ref="name" name="name" id="name" required="required"/>
               <br/>
                <h4>Review</h4>
                <textarea
                    className='add__comment' defaultValue=''
                    placeholder='Good Game, Great Graphics' ref='review' name="review" id="review" required="required">
      	        </textarea>
                <h4>Price of Game</h4>
                <input type="number" min="1" placeholder="50.99"  step="any" name="price" id="price" required="required" />

                <h4>Age Rating</h4>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="age3">+3</option>
                    <option value="age7">7</option>
                    <option value="age12">12</option>
                    <option value="age16">16</option>
                    <option value="age18">18</option>
                </select>

                <h4>Platform</h4>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="age3">XBOX ONE</option>
                    <option value="age7">PLAYSTATION 4</option>
                    <option value="age12">XBOX 360</option>
                    <option value="age16">PLAYSTATION 3</option>
                    <option value="age18">WII</option>
                    <option value="age18">PC</option>
                </select>


                <br/>
                <button>ADD REVIEW</button>
                {this.renderError()}
            </form>
        );
    }

    onBtnClickHandler(e) {
    e.preventDefault();
        var name = this.refs.name.value;
        var review = this.refs.review.value;
        var price = this.refs.price.value;
        var age = this.refs.age.value;
        var platform = this.refs.platform.value;


    var item = [{
        name: name,
        review: review,
        price: price,
        age: age,
        platform: platform,
    }];
    window.ee.emit('Review.add', item);

    this.setState({textIsEmpty: true});
}


}

export default FormCreate;
