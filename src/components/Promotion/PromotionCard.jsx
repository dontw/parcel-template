import { h } from 'preact'
import LazyImage from '../LazyImage'

import numberFormatter from '~/utils/numberFormatter'

export default function Card({ data }) {
  return (
    <div class='rounded-sm bg-white m-1 md:m-3 hover:shadow-lg relative' style="transition:.3s;">
      <a class='block' href={data.url} target='_blank'>
        <LazyImage src={data.image} alt='image' width='500' height='600' />
        <div class="absolute h-16 y-16 p-2 bg-red-500 text-white" style="top:12px; right:12px;">doge</div>
        <div class='px-3 md:px-6 py-2 md:py-4'>
          <div class='font-bold md:text-xl mb-2'>{data.designer}</div>
          <div class='mb-1 text-sm md:text-base truncate' style='color:#999999;'>
            {data.product_name}
          </div>
          <div class='mb-3'>$ {numberFormatter(data.price)}</div>
          <div class='text-center md:text-right'>
            <div class='w-full md:w-auto inline-block bg-gray-700 rounded-sm text-white py-2 px-6 text-sm'>
              前往購買
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
