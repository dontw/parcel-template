import { h } from 'preact';
import LogoImage from '../assets/halfme-logo-black.svg'

export default function Nav(){
  return (
    <nav class="bg-black px-6 py-3 md:py-4 text-center md:text-left text-white">
      <a href='https://www.halfme.com/' class="inline-block">
        <img src={LogoImage} style="filter:invert(100%);" class="h-8 md:h-10" alt="logo"/>
      </a>
    </nav>
  )
}