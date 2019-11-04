import { h } from 'preact';

export default function SqureImage({data}) {
  return(
    <div class="text-center py-3 md:py-16 xl:px-48" style="min-height:500px;" style={{'background-color' : data.bgColor}}>
      <picture>
        <source media="(min-width: 768px)" srcset={data.imageUrl} />
        <img class="inline-block " src={data.mobileImageUrl} alt="image"/>
      </picture>
    </div>
  )
}
