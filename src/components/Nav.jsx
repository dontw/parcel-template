import { h } from 'preact';
import LogoImage from '../assets/halfme-logo-white.jpg'

function clickAnchorItem() {
  event.preventDefault();
  document.querySelector('#test1').scrollIntoView({ behavior: 'smooth' });
}

export default function Nav(){
  return (
    <nav class="bg-black px-6 py-3 md:py-4 text-center md:text-left text-white">
      <a href='https://www.halfme.com/' class="inline-block">
        <img src={LogoImage} class="h-8 md:h-10" alt="logo"/>
      </a>
      <a href="#test1" onClick={clickAnchorItem}>test1</a>
      <a href="#test2">test2</a>
    </nav>
  )
}