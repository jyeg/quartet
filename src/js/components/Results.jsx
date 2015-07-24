import React from 'react';
import ActionCreator from '../actions/QuestionnaireActionCreators';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import ListGroup from 'react-bootstrap/lib/ListGroup.js';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem.js';



export default React.createClass({

	getInitialState() {
		return {
			therapist: ['Dr. Finkelstein', 'Dr. Who'],
			thanksVisible: false
		};
	},
	toggleThanks(){
		this.setState({thanksVisible: true});
	},
	gaugeSeverity(score){
		let severity = 'none';
		if(5 <= score && score <= 9)
			severity = 'mild';
		if(10 <= score && score  <= 14)
			severity = 'moderate';
		if(15 <= score && score  <= 19)
			severity = 'moderately severe';
		if(20 <= score && score <= 27)
			severity = 'severe';

		return severity;
	},

	render() {
		let {thanksVisible, therapist} = this.state;
		let {score} = this.props;
		let severity = this.gaugeSeverity(score);
		var output;
		if (score > 10) {
			return (
				<div className="container">
					<form>
					<h4>You scored a {score} out of 27</h4>
					<h4>Your Depression Severity is: {severity}</h4>
					<h5>Here are some specialist whom may help.</h5>
					<ListGroup>
						<ListGroupItem>
							<Input type="checkbox" ref="checkbox" label="Dr. Who"/>
						</ListGroupItem>
						<ListGroupItem>
							<Input type="checkbox" ref="checkbox" label="Dr. Holmes"/>
						</ListGroupItem>
					</ListGroup>
						{this.state.thanksVisible ? <div>Thank you!</div> : null}
						<Button onClick={this.toggleThanks}>Book an appointment</Button>
					</form>
				</div>
			);
		}


		return (
			<div className="container">
				<form>
					<h4>You scored a {score} out of 27</h4>
					<h4>Your Depression Severity is: {severity}</h4>
					<p>Thank you for participating!</p>
				</form>
			</div>
		);
	}
});
