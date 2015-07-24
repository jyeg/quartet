'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapLibButton = require('react-bootstrap/lib/Button');

var _reactBootstrapLibButton2 = _interopRequireDefault(_reactBootstrapLibButton);

var _reactBootstrapLibJumbotron = require('react-bootstrap/lib/Jumbotron');

var _reactBootstrapLibJumbotron2 = _interopRequireDefault(_reactBootstrapLibJumbotron);

var _QuestionnaireJsx = require('./Questionnaire.jsx');

var _QuestionnaireJsx2 = _interopRequireDefault(_QuestionnaireJsx);

var _AlertJsx = require('./Alert.jsx');

var _AlertJsx2 = _interopRequireDefault(_AlertJsx);

var _ResultsJsx = require('./Results.jsx');

var _ResultsJsx2 = _interopRequireDefault(_ResultsJsx);

exports['default'] = _react2['default'].createClass({
  displayName: 'App',

  propTypes: {
    questions: _react.PropTypes.array.isRequired,
    onTally: _react.PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      questions: []
    };
  },

  handleAlertDismiss: function handleAlertDismiss() {
    this.setState({ onAlert: false });
  },

  handleAlertShow: function handleAlertShow() {
    this.setState({ onAlert: true });
  },

  render: function render() {
    var _props = this.props;
    var onTally = _props.onTally;
    var questions = _props.questions;
    var onAlert = _props.onAlert;
    var onHandleAlertDismiss = _props.onHandleAlertDismiss;
    var onResult = _props.onResult;

    if (onResult) {
      return _react2['default'].createElement(_ResultsJsx2['default'], null);
    }
    return _react2['default'].createElement(
      'div',
      { className: 'container' },
      _react2['default'].createElement(
        _reactBootstrapLibJumbotron2['default'],
        null,
        _react2['default'].createElement(
          'h1',
          null,
          'Patient Health Questionnaire (PHQ-9)'
        )
      ),
      _react2['default'].createElement(_QuestionnaireJsx2['default'], { questions: questions }),
      onAlert ? _react2['default'].createElement(_AlertJsx2['default'], { onDismiss: onHandleAlertDismiss }) : null,
      _react2['default'].createElement(
        _reactBootstrapLibButton2['default'],
        { onClick: onTally, bsStyle: 'primary' },
        'Submit'
      )
    );
  }
});
module.exports = exports['default'];

//# sourceMappingURL=App-compiled.js.map