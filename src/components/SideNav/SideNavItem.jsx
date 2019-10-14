import { h } from 'preact'

// icons

// 飾品
import AccIcon from '~/assets/icon_accessories.svg'
// 連身裝
import DressIcon from '~/assets/icon_dress.svg'
// 外套
import CoatIcon from '~/assets/icon_coat.svg'
// 下著
import PantsIcon from '~/assets/icon_pants.svg'
// 上身
import ShirtIcon from '~/assets/icon_shirt.svg'
// 眼鏡
import GlassesIcon from '~/assets/icon_glasses.svg'
// 襪子
import SocksIcon from '~/assets/icon_socks.svg'

const Icon = {
  accessories: AccIcon,
  dress: DressIcon,
  coat: CoatIcon,
  pants: PantsIcon,
  shirt: ShirtIcon,
  glasses: GlassesIcon,
  socks: SocksIcon
}

export default function SideNavItes({itemData}) {
  return (
    <li class='ml-4 mb-3'>
      <a
        class='inline-block px-4 py-1 pt-2 bg-gray-700 hover:bg-gray-500 rounded-sm'
        style='min-width:150px;'
        href={itemData.targetId}
      >
        <span
          class='inline-block p-1 bg-white border-2 border-gray-400 rounded-full align-middle mr-2'
          style='margin-bottom:5px;'
        >
          <img src={Icon[itemData.icon]} style='height:18px; width:18px;' alt={`${itemData.icon}'s icon`} />
        </span>
        <span class='inline-block text-lg  text-white'>{itemData.name}</span>
      </a>
    </li>
  )
}
