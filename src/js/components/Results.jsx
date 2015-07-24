import React from 'react';
import ActionCreator from '../actions/QuestionnaireActionCreators';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';


export default React.createClass({

	getInitialState() {
    return {
      therapist: ['Dr. Finkelstein', 'Dr. Who'],
	    thanksVisible: false
    };
  },
	toggleThanks(){
		this.setState({thanksVisible:true});
	},

  render() {
	  let {thanksVisible, therapist} = this.state;

    return (
	    <form>
		    <h4>Here are some specialist whom may help.</h4>

					{therapist.map(function(doc) {
						<Input type="checkbox" ref="checkbox" label={doc} />
						})
					}

		    {this.state.thanksVisible ? <div>Thank you!</div>: null}

		    <Button onClick={this.toggleThanks}></Button>
	    </form>
    );
  }
});
