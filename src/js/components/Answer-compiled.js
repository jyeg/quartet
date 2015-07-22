'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsQuestionnaireActionCreators = require('../actions/QuestionnaireActionCreators');

var _actionsQuestionnaireActionCreators2 = _interopRequireDefault(_actionsQuestionnaireActionCreators);

var _reactBootstrapLibListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var _reactBootstrapLibListGroupItem2 = _interopRequireDefault(_reactBootstrapLibListGroupItem);

var _reactBootstrapLibInput = require('react-bootstrap/lib/Input');

var _reactBootstrapLibInput2 = _interopRequireDefault(_reactBootstrapLibInput);

exports['default'] = _react2['default'].createClass({
  displayName: 'Answer',

  getDefaultProps: function getDefaultProps() {
    return {
      question: {
        number: '',
        text: false
      }
    };
  },

  handleToggle: function handleToggle(question) {},

  render: function render() {
    var number = this.props.number;

    console.log(number);
    return _react2['default'].createElement(
      ListGroup,
      null,
      _react2['default'].createElement(
        _reactBootstrapLibListGroupItem2['default'],
        { href: '#link1', onClick: this.handleToggle.bind(this, number) },
        'test1'
      ),
      _react2['default'].createElement(
        _reactBootstrapLibListGroupItem2['default'],
        { bsStyle: 'success' },
        'Success'
      ),
      _react2['default'].createElement(
        _reactBootstrapLibListGroupItem2['default'],
        { bsStyle: 'info' },
        'Info'
      ),
      _react2['default'].createElement(
        _reactBootstrapLibListGroupItem2['default'],
        { bsStyle: 'warning' },
        'Warning'
      ),
      _react2['default'].createElement(
        _reactBootstrapLibListGroupItem2['default'],
        { bsStyle: 'danger' },
        'Danger'
      )
    );
  }
});
module.exports = exports['default'];

//if (this.refs.checkbox.getChecked()) {
//  ActionCreator.getQuestionsFromServer();
//}

//# sourceMappingURL=Answer-compiled.js.map