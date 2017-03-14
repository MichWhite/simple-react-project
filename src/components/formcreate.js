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
                <input type="text" placeholder="Battlefield 1" ref="NameInput" required="required"/>
               <br/>
                <h4>Review</h4>
                <textarea
                    className='add__comment' defaultValue=''
                    placeholder='Good Game, Great Graphics' ref='text' required="required">
      	        </textarea>
                <h4>Price of Game</h4>
                <input type="number" min="1" placeholder="50.99"  step="any" name="price" id="price" required="required" />
             {/*<input type="number" min="0" max="10000" step="1" value=""/>*/}



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

    handleCreate(event) {
        event.preventDefault();

        const NameInput = this.refs.NameInput;
        const task = NameInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.NameInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please make sure something is entered for all items.';
        } else if (_.find(this.props.gameReviews, gameReview => gameReview.task === task)) {
            return 'Review already exists.';
        } else {
            return null;
        }
    }
}

export default FormCreate;
