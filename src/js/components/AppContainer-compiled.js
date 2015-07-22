'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesQuestionStore = require('../stores/QuestionStore');

var _storesQuestionStore2 = _interopRequireDefault(_storesQuestionStore);

var _actionsQuestionnaireActionCreators = require('../actions/QuestionnaireActionCreators');

var _actionsQuestionnaireActionCreators2 = _interopRequireDefault(_actionsQuestionnaireActionCreators);

var _AppJsx = require('./App.jsx');

var _AppJsx2 = _interopRequireDefault(_AppJsx);

exports['default'] = _react2['default'].createClass({
  displayName: 'AppContainer',

  _onChange: function _onChange() {
    this.setState(_storesQuestionStore2['default'].getAll());
  },

  getInitialState: function getInitialState() {
    return {
      questions: _actionsQuestionnaireActionCreators2['default'].getQuestionsFromServer()
    };
  },

  componentDidMount: function componentDidMount() {
    _storesQuestionStore2['default'].addChangeListener(this._onChange);
  },

  componentWillUnmount: function componentWillUnmount() {
    _storesQuestionStore2['default'].removeChangeListener(this._onChange);
  },

  //handleAddTask(e) {
  //  let title = prompt('Enter task title:');
  //  if (title) {
  //    ActionCreator.addItem(title);
  //  }
  //},

  handleTally: function handleTally(e) {
    _actionsQuestionnaireActionCreators2['default'].tally(e);
  },

  render: function render() {
    var questions = this.state.questions;

    console.log('in App Container', questions);

    return _react2['default'].createElement(_AppJsx2['default'], {
      //onAddTask={this.handleAddTask}
      //onClear={this.handleClear}
      onTally: this.handleTally,
      questions: questions });
  }
});
module.exports = exports['default'];

//# sourceMappingURL=AppContainer-compiled.js.map