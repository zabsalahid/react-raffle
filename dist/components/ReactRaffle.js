"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactRaffle;

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReactRaffle() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(_Container.default, {
    maxWidth: false
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    container: true
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(_Typography.default, null, "Test")), /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(_Button.default, {
    variant: "contained",
    color: "primary"
  }, "Button")))));
}

const useStyles = (0, _core.makeStyles)(theme => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));