import { h } from 'preact';

export default function SqureImage({data}) {
  return(
    <div class="bg-gray-200 text-center py-3 md:py-16" style="min-height:500px;">
      <picture>
        <source media="(min-width: 768px)" srcset={data.imageUrl} />
        <img class="inline-block" src={data.mobileImageUrl} alt="image"/>
      </picture>
    </div>
  )
}