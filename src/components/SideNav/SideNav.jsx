import { h } from 'preact'

import { useEffect } from 'preact/hooks'

import SideNavItem from './SideNavItem'

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
      style='left:-50%; top:132px;  z-index:1000; transition:.3s;'
    >
      {data.linkList.map(item => (
        <SideNavItem
          itemData={item}
          onClick={e => clickAnchorItem(e, item.targetId)}
        />
      ))}
    </ul>
  )
}
