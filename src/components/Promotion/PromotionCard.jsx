import { h } from 'preact';

function numberFormatter(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default function Card({ data }) {
  return (
    <div class="rounded-sm bg-white m-3">
      <img class="object-cover" src={data.image} alt="Sunset in the mountains"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{data.designer}</div>
        <div class="mb-1 truncate" style="color:#999999;">{data.product_name}</div>
        <div class="mb-3">$ {numberFormatter(data.price)}</div>
        <div class="text-center md:text-right">
          <a class="w-full md:w-auto inline-block bg-gray-700 rounded-sm text-white py-2 px-6 text-sm" href={data.url} target="_blank">前往購買</a>
        </div>
      </div>
    </div>
  );
}