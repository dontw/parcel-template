import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export default function Card({ data }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full h-64 object-cover" src={data.url} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{data.name}</div>
        <p class="text-gray-700 text-base">
          我是一些敘述文字，文字上看看能不能符合版面的要求
        </p>
      </div>
      <div class="px-6 py-4">
        放按鈕
      </div>
    </div>
  );
}