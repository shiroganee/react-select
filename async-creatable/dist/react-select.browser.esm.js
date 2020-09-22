import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/assertThisInitialized';
import '@babel/runtime/helpers/inherits';
import '@babel/runtime/helpers/possibleConstructorReturn';
import '@babel/runtime/helpers/getPrototypeOf';
import 'react';
import 'memoize-one';
import '@emotion/core';
import 'react-dom';
import '@babel/runtime/helpers/typeof';
import '../../dist/index-64187825.browser.esm.js';
import { S as Select } from '../../dist/Select-c6f30849.browser.esm.js';
import '@emotion/css';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import 'react-input-autosize';
import { m as manageState } from '../../dist/stateManager-2f2b6f5b.browser.esm.js';
import { makeAsyncSelect } from '../../async/dist/react-select.browser.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.browser.esm.js';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
