import { h } from 'preact';
import LazyImage from '../LazyImage';
import DiscountTag from './components/DiscountTag';

import numberFormatter from '~/utils/numberFormatter';


export default function Card({ data }) {
  return (
    <div
      class="rounded-sm bg-white m-1 md:m-3 hover:shadow-lg relative"
      style="transition:.3s;"
    >
      <a class="block" href={data.url} target="_blank">
        <LazyImage src={data.image} alt="image" width="500" height="600" />
        <DiscountTag discountRate={data.discount} />
        <div class="px-3 md:px-6 py-2 md:py-4">
          <div class="font-bold mb-0">{data.designer}</div>
          <div class="mb-3 text-sm truncate" style="color:#999999;">
            {data.product_name}
          </div>

          <div class="mb-3">
            <div
              class="text-gray-400 line-through inline-block mr-2"
              style="font-size:12px"
            >
              $ {numberFormatter(data.price)}
            </div>

            <span class="text-red-500" style="font-size:16px;">
              ${numberFormatter(data.discount_price)}
            </span>
          </div>

          <div class="text-center md:text-right">
            <div class="w-full md:w-auto inline-block bg-gray-700 rounded-sm text-white py-2 px-6 text-sm">
              前往購買
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
