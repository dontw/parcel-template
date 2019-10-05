import { h } from 'preact';

export default function SqureImage({data}) {
  return(
    <div class="bg-gray-200 text-center py-3 md:py-16">
      <img class="inline-block" src={data.imageUrl} alt="image"/>
    </div>
  )
}