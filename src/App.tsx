import Details from "./pages/details";
import { useState } from "react";
import Global from "./assets/styles/global";
import Home from "./pages/home";
import { NewItem } from "./types/news";

import news from './assets/db/news.json'

function App() {
  const [currentNews, setNews] = useState<NewItem>()

  function addNew (newItem: NewItem) {
    setNews(newItem)
  }

  function backNews () {
    setNews(undefined)
  }

  return (
    <>
      <Global />

      {currentNews != null ? (
        <Details item={currentNews} backToNews={backNews} />
      ) : (
        <Home news={news} changeNews={addNew} />
      )}
    </>
    
  )
}

export default App
