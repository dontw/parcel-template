import { h } from 'preact';

import PromotionCard from './PromotionCard.jsx'

export default function Promotion({data}) {
  return(
    <div id={data.promotionId}>
      <h1 class="text-xl md:text-4xl py-2 md:py-6 text-center" style={{backgroundColor: data.headerBgColor}}>
        {data.promotionHeader}
      </h1>
      <div style={{backgroundColor: data.contentBgColor}}>
        <div class="container m-auto justify-between flex flex-wrap py-5 px-2">
          { data.promotionItems.map( item => 
              <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <PromotionCard data={item}/>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}