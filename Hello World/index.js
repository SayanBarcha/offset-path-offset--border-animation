function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {if (window.CP.shouldStopExecution(0)) break;var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}window.CP.exitedLoop(0);return target;};return _extends.apply(this, arguments);}import React from 'https://cdn.skypack.dev/react';
import { render } from 'https://cdn.skypack.dev/react-dom';
import tweakpane from 'https://cdn.skypack.dev/tweakpane';
import { useTweaks } from 'https://cdn.skypack.dev/use-tweaks';

const ROOT_NODE = document.querySelector('#app');

const App = () => {
  const tweakPanelRef = React.useRef(null);
  const {
    element: el,
    hue,
    border,
    inset,
    monochrome,
    radius,
    glow,
    opacity,
    anchor,
    speed,
    explode,
    style } =
  useTweaks("Configuration", {
    speed: {
      value: 2,
      min: 1,
      max: 20,
      step: 0.1 },

    hue: {
      value: Math.floor(Math.random() * 359),
      min: 0,
      max: 359,
      step: 1 },

    border: {
      value: 2,
      max: 10,
      min: 1,
      step: 1 },

    radius: {
      value: 50,
      max: 50,
      min: 0,
      step: 1 },

    opacity: {
      value: 1,
      max: 1,
      min: 0.1,
      step: 0.01 },

    glow: {
      value: 60,
      max: 200,
      min: 10,
      step: 1 },

    anchor: {
      value: 100,
      max: 100,
      min: 0,
      step: 1 },

    inset: { value: false },
    monochrome: { value: false },
    element: {
      value: 'button',
      options: ['button', 'article'] },

    style: {
      value: 'single',
      options: ['single', 'double'] },

    explode: { value: false } },
  { container: tweakPanelRef });

  const Comp = el;

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", {
      key: el + style,
      className: "scene",
      "data-explode": explode,
      "data-inset": inset,
      "data-half": style === 'half-n-half',
      "data-monochrome": monochrome,
      "data-double": style === 'double',
      style: {
        '--hue': hue,
        '--border': border,
        '--radius': radius,
        '--glow': glow,
        '--anchor': anchor,
        '--speed': speed,
        '--opacity': opacity } }, /*#__PURE__*/


    React.createElement(Comp, { className: "el" }, /*#__PURE__*/
    React.createElement("span", { "data-glow": true }), /*#__PURE__*/
    React.createElement("span", _extends({
      className: "el__content" },
    el === 'button' ? { contentEditable: true } : null),

    el === 'button' ?
    'Button' : /*#__PURE__*/

    React.createElement("h3", null, /*#__PURE__*/
    React.createElement("span", null, "CSS in 2024"), /*#__PURE__*/
    React.createElement("span", null, "Game changing APIs to make your life easier.")))), /*#__PURE__*/




    React.createElement("span", { "data-glow": true })), /*#__PURE__*/

    React.createElement("div", { className: "tweakpane", ref: tweakPanelRef })));


};

render( /*#__PURE__*/React.createElement(App, null), ROOT_NODE);