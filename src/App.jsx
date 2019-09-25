import { h } from 'preact'

export default function App() {
  return (
    <div>
      <h1>Hello World from Preact! 📦 🚀</h1>
      <h2 className="text-red-500 text-6xl">style testing!</h2>
      <h3 className="text-red-500 text-5xl"> tailwind style test</h3>
      <div class="mt-4">
        <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>
      </div>
    </div>
  )
}