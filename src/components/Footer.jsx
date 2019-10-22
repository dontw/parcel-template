import { h } from 'preact'
import LogoImage from '../assets/halfme-logo-black.svg'
import ShareIcon from '../assets/icon_share.svg'
function handleClick() {
  let copyInput = document.querySelector('#copy-input')
  copyInput.select()
  document.execCommand('copy')
  alert(`已複製網址(${window.location.href})囉!，快分享出去吧！`)
}
export default function Footer(params) {
  return (
    <footer class='bg-white hidden lg:block px-6 py-3 md:py-4 text-center md:text-left'>
      <a href='https://www.halfme.com/' class='inline-block mr-2'>
        <img src={LogoImage} class='h-8 md:h-10' alt="halfme's logo" />
      </a>
      <p class='inline-block'>Copyright ©2019 Halfme</p>
      <input
        id='copy-input'
        style='position:absolute; right:9999999px;'
        type='text'
        value={window.location.href}
      />
      <button
        style='transition:.3s;'
        class='float-right bg-gray-700 hover:bg-gray-500 text-white p-3 font-bold rounded-full'
        onClick={handleClick}
      >
        <img
          style='height:24px; width:24px;'
          src={ShareIcon}
          alt='share icon'
        />
      </button>
      {/* <img
        class="float-right"
        src='https://cloud.shopback.com/raw/upload/static/images/footer/happydance-loader.gif'
        alt='wow'
      /> */}
    </footer>
  )
}
