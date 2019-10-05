import { h,render } from 'preact';
import 'whatwg-fetch'
import './style/main.css';

import App from './App.jsx';

const mountNode = document.getElementById('app');
render(<App />, mountNode, mountNode.lastChild);