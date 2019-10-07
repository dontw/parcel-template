import { h } from "preact";
import BellIcon from '../assets/bell.svg'
function clickAnchorItem(event, id) {
  event.preventDefault();
  const targetElm = document.querySelector(id);
  if (targetElm) {
    targetElm.scrollIntoView({ behavior: "smooth" });
  }
}

export default function SideNav({ data }) {
  return (
    <ul class='hidden lg:block lg:fixed' style='top:30%; z-index:1000;'>
      {data.linkList.map(item => (
        <li class='ml-4 mb-3'>
          <a
            class='inline-block px-4 py-1 pt-2 bg-gray-700 hover:bg-gray-500 rounded-sm'
            style='min-width:150px;'
            href={item.targetId}
            onClick={e => clickAnchorItem(e ,item.targetId)}
          >
            <span class="inline-block p-1 bg-white rounded-full align-middle mr-2" style="margin-bottom:5px;">
              <img src={BellIcon} style="height:24px; width:24px;" alt="bell icon"/>
            </span>
            <span class="inline-block text-lg  text-white">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
