import { h } from 'preact'

import { useEffect } from 'preact/hooks'

// icons
import accIcon from '../assets/accessories.svg'
import clothIcon from '../assets/cloth.svg'
import dressIcon from '../assets/dress.svg'
import coatIcon from '../assets/icon_coat.svg'
import JeansIcon from '../assets/jeans.svg'
import ShirtIcon from '../assets/shirt.svg'

function clickAnchorItem(event, id) {
  event.preventDefault()
  const targetElm = document.querySelector(id)
  if (targetElm) {
    targetElm.scrollIntoView({ behavior: 'smooth' })
  }
}

function handleScroll(params) {
  let NavElm = document.querySelector('#side-nav')
  let firstCarouselElmScrollHeight = document.querySelector('#glide-1')
    .scrollHeight

  if (window.pageYOffset > firstCarouselElmScrollHeight) {
    NavElm.style.left = '0'
  } else {
    NavElm.style.left = '-50%'
  }
}

export default function SideNav({ data }) {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <ul
      id='side-nav'
      class='hidden xl:block xl:fixed'
      style='left:-50%; top:30%; z-index:1000; transition:.3s;'
    >
      {data.linkList.map(item => (
        <li class='ml-4 mb-3'>
          <a
            class='inline-block px-4 py-1 pt-2 bg-gray-700 hover:bg-gray-500 rounded-sm'
            style='min-width:150px;'
            href={item.targetId}
            onClick={e => clickAnchorItem(e, item.targetId)}
          >
            <span
              class='inline-block p-1 bg-white border-2 border-gray-400 rounded-full align-middle mr-2'
              style='margin-bottom:5px;'
            >
              <img
                src={accIcon}
                style='height:18px; width:18px;'
                alt='bell icon'
              />
            </span>
            <span class='inline-block text-lg  text-white'>{item.name}</span>
          </a>
        </li>
      ))}
      <li class='ml-4 mb-3'>
        <a
          class='inline-block px-4 py-1 pt-2 bg-gray-700 hover:bg-gray-500 rounded-sm'
          style='min-width:150px;'
        >
          <span
            class='inline-block p-1 bg-white border-2 border-gray-400 rounded-full align-middle mr-2'
            style='margin-bottom:5px;'
          >
            <img
              src={accIcon}
              style='height:18px; width:18px;'
              alt='bell icon'
            />
          </span>
          <span class='inline-block text-lg  text-white'>飾品</span>
        </a>
      </li>

      <li class='ml-4 mb-3'>
        <a
          class='inline-block px-4 py-1 pt-2 bg-gray-700 hover:bg-gray-500 rounded-sm'
          style='min-width:150px;'
        >
          <span
            class='inline-block p-1 bg-white border-2 border-gray-400 rounded-full align-middle mr-2'
            style='margin-bottom:5px;'
          >
            <img
              src={ShirtIcon}
              style='height:18px; width:18px;'
              alt='bell icon'
            />
          </span>
          <span class='inline-block text-lg  text-white'>上衣</span>
        </a>
      </li>

      <li class='ml-4 mb-3'>
        <a
          class='inline-block px-4 py-1 pt-2 bg-gray-700 hover:bg-gray-500 rounded-sm'
          style='min-width:150px;'
        >
          <span
            class='inline-block p-1 bg-white border-2 border-gray-400 rounded-full align-middle mr-2'
            style='margin-bottom:5px;'
          >
            <img
              src={dressIcon}
              style='height:18px; width:18px;'
              alt='bell icon'
            />
          </span>
          <span class='inline-block text-lg  text-white'>裙子</span>
        </a>
      </li>

      <li class='ml-4 mb-3'>
        <a
          class='inline-block px-4 py-1 pt-2 bg-gray-700 hover:bg-gray-500 rounded-sm'
          style='min-width:150px;'
        >
          <span
            class='inline-block p-1 bg-white border-2 border-gray-400 rounded-full align-middle mr-2'
            style='margin-bottom:5px;'
          >
            <img
              src={JeansIcon}
              style='height:18px; width:18px;'
              alt='bell icon'
            />
          </span>
          <span class='inline-block text-lg  text-white'>褲子</span>
        </a>
      </li>

      <li class='ml-4 mb-3'>
        <a
          class='inline-block px-4 py-1 pt-2 bg-gray-700 hover:bg-gray-500 rounded-sm'
          style='min-width:150px;'
        >
          <span
            class='inline-block p-1 bg-white border-2 border-gray-400 rounded-full align-middle mr-2'
            style='margin-bottom:5px;'
          >
            <img
              src={coatIcon}
              style='height:18px; width:18px;'
              alt='bell icon'
            />
          </span>
          <span class='inline-block text-lg  text-white'>外套</span>
        </a>
      </li>
    </ul>
  )
}
