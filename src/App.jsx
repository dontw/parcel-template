import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { Router } from 'preact-router'
import smoothscroll from 'smoothscroll-polyfill'

import pkg from '../package.json'

import Error from './view/Error'
import Home from './view/Home'
import SummerSale2019 from './view/SummerSale2019'
import PanEvent from './view/PanEvent'
import DoubleEleven from './view/DoubleEleven'

export default function App() {
  useEffect(() => {
    smoothscroll.polyfill()
    if(process.env.CURR_ENV === 'develop')
    console.log(
      `%c ${pkg.name} for Carnival %c v ${pkg.version} %c`,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#E2601A ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent'
    )
  })

  return (
  <Router>
    <Home  path="/" />
    <SummerSale2019  path="/goodbuy2019ss" />
    <PanEvent path="/panevent" />
    {/* TODO: change to real url and remeber to change nginx config file! */}
    {/* <DoubleEleven path="/double-eleven" /> */}
    <Error default />
  </Router>
  )
}
