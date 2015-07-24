'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactLibKeyMirror = require('react/lib/keyMirror');

var _reactLibKeyMirror2 = _interopRequireDefault(_reactLibKeyMirror);

exports['default'] = {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: (0, _reactLibKeyMirror2['default'])({
    TASK_ADDED: null,
    ANSWERED: null,
    TALLY: null,
    SET_QUESTIONS: null
  }),

  ActionSources: (0, _reactLibKeyMirror2['default'])({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
module.exports = exports['default'];

//# sourceMappingURL=Constants-compiled.js.map