import { h } from 'preact'
import LogoImage from '../assets/halfme-logo-black.svg'

function handleClick() {
  let copyInput = document.querySelector('#copy-input')
  copyInput.select()
  document.execCommand('copy')
  alert(`已複製網址(${window.location.href})囉!，快分享出去吧！`)
}
export default function Footer(params) {
  return (
    <footer class='bg-white px-6 py-3 md:py-4 text-center md:text-left'>
      <a href='https://www.halfme.com/' class='inline-block mr-2'>
        <img src={LogoImage} class='h-8 md:h-10' alt="halfme's logo" />
      </a>
      <p class='inline-block'>Copyright ©2019 Halfme</p>
      <input id="copy-input" style="position:absolute; right:9999999px;" type="text" value={window.location.href}/>
      <button
        class='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleClick}
      >
        分享
      </button>
    </footer>
  )
}
