import { h } from 'preact'
import LazyImage from '../LazyImage'

import numberFormatter from '~/utils/numberFormatter'

export default function Card({ data }) {
  return (
    <div class='rounded-sm bg-white m-3 hover:shadow-lg' style="transition:.3s;">
      <a class='block' href={data.url} target='_blank'>
        <LazyImage src={data.image} alt='image' width='500' height='600' />
        <div class='px-6 py-4'>
          <div class='font-bold text-xl mb-2'>{data.designer}</div>
          <div class='mb-1 truncate' style='color:#999999;'>
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
