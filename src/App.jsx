import { h } from "preact";
import { useEffect } from "preact/hooks";
import smoothscroll from "smoothscroll-polyfill";

import pkg from "../package.json";

import Home from "./view/Home.jsx";

export default function App() {
  useEffect(() => {
    smoothscroll.polyfill();
    console.log(
      `%c parcel-starter for Carnival %c v ${pkg.version} %c`,
      "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#E2601A ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent"
    );
  });

  return <Home />;
}
