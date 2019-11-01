import { h, render } from 'preact'
import { useState, useEffect } from 'preact/hooks'

export default function Home (){
  useEffect(() => {
    location.href="https://www.halfme.com"
  }, []);
  return (
    <div></div>
  )
}
