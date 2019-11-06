import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { Router } from 'preact-router';
import smoothscroll from 'smoothscroll-polyfill';

import pkg from '../package.json';

// pages
import Error from './view/Error';
import Home from './view/Home';
import EventPageContainer from './view/EventPageContainer';

// contents
import summerContent from './eventContentConfigs/goodbuy2019ss';
import paneventContent from './eventContentConfigs/panevent';

export default function App() {
  useEffect(() => {
    smoothscroll.polyfill();
    if (process.env.CURR_ENV === 'develop')
      console.log(
        `%c ${pkg.name} for Carnival %c v ${pkg.version} %c`,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#E2601A ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent'
      );
  });

  return (
    <Router>
      <Home path="/" />
      <EventPageContainer content={summerContent} path="/goodbuy2019ss" />
      {/* <EventPageContainer content={paneventContent} path="/panevent" /> */}
      {/* TODO: change to real url and remeber to change nginx config file! */}
      <Error default />
    </Router>
  );
}
