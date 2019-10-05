import { h } from 'preact';
import LogoImage from '../assets/halfme-logo-black.jpg'
export default function Footer(params) {
  return (
    <footer class="bg-white px-6 py-3 md:py-4 text-center md:text-left">
      <a href='https://www.halfme.com/' class="inline-block mr-2">
        <img src={LogoImage} class="h-8 md:h-10" alt="halfme's logo"/>
      </a>
      <p class="inline-block">Copyright ©2019 Halfme</p>
    </footer>
  )
}