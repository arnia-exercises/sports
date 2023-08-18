import Template from "../components/template";
import NewItem from "../components/new-item";
import { NewItem as NewItemType, News } from "../types/news";

type Props = {
  news: News
  changeNews: (newItem: NewItemType) => void
}

export default function Home ({ news, changeNews }: Props) {
  return (
    <Template>
      <div className="news">
        {news.map(item => (
          <NewItem
            item={item}
            key={item.id}
            handleClick={() => changeNews(item)}
          />
        ))}
      </div>
    </Template>
  )
}