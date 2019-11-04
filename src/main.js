import { h,render } from 'preact';
import 'whatwg-fetch'
import App from './App.jsx';

const mountNode = document.getElementById('app');
render(<App />, mountNode, mountNode.lastChild);
