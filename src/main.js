import { h,render } from 'preact';
import './style/main.css';
import App from './App.jsx';


const mountNode = document.getElementById('app');
render(<App />, mountNode, mountNode.lastChild);