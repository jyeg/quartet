'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsQuestionnaireActionCreators = require('../actions/QuestionnaireActionCreators');

var _actionsQuestionnaireActionCreators2 = _interopRequireDefault(_actionsQuestionnaireActionCreators);

var _reactBootstrapLibListGroupJs = require('react-bootstrap/lib/ListGroup.js');

var _reactBootstrapLibListGroupJs2 = _interopRequireDefault(_reactBootstrapLibListGroupJs);

var _reactBootstrapLibListGroupItemJs = require('react-bootstrap/lib/ListGroupItem.js');

var _reactBootstrapLibListGroupItemJs2 = _interopRequireDefault(_reactBootstrapLibListGroupItemJs);

var _reactBootstrapLibButtonJs = require('react-bootstrap/lib/Button.js');

var _reactBootstrapLibButtonJs2 = _interopRequireDefault(_reactBootstrapLibButtonJs);

exports['default'] = _react2['default'].createClass({
  displayName: 'Answer',

  getDefaultProps: function getDefaultProps() {
    return {
      question: {
        id: ''
      }
    };
  },

  handleToggle: function handleToggle(e) {
    //if (this.refs.checkbox.getChecked()) {
    //  ActionCreator.getQuestionsFromServer();
    //}
    _actionsQuestionnaireActionCreators2['default'].answer(this.props.id, e.target.id);
  },

  render: function render() {
    var id = this.props.id;

    return _react2['default'].createElement(
      _reactBootstrapLibListGroupJs2['default'],
      null,
      _react2['default'].createElement(
        _reactBootstrapLibListGroupItemJs2['default'],
        { id: '1', bsStyle: 'success', onClick: this.handleToggle },
        'Not at all'
      ),
      _react2['default'].createElement(
        _reactBootstrapLibListGroupItemJs2['default'],
        { id: '2', bsStyle: 'info', onClick: this.handleToggle },
        'Several days'
      ),
      _react2['default'].createElement(
        _reactBootstrapLibListGroupItemJs2['default'],
        { id: '3', bsStyle: 'warning', onClick: this.handleToggle },
        'More than half the days'
      ),
      _react2['default'].createElement(
        _reactBootstrapLibListGroupItemJs2['default'],
        { id: '4', bsStyle: 'danger', onClick: this.handleToggle },
        'Nearly every day'
      )
    );
  }
});
module.exports = exports['default'];

//# sourceMappingURL=Answer-compiled.js.map