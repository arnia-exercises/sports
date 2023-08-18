import Template from "../components/template";
import { NewItem } from "../types/news";

type Props = {
  item: NewItem
}

export default function Details ({ item }: Props) {
  return (
    <Template>
      <h1>{item.title}</h1>
      <p>{item.summary}</p>
    </Template>
  )
}