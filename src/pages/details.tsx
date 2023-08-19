import { Button } from "../components/button/styled";
import Template from "../components/template";
import Thumb from "../components/thumb";
import { NewItem } from "../types/news";

type Props = {
  item: NewItem
  backToNews: () => void
}

export default function Details ({ item, backToNews }: Props) {
  return (
    <Template>
      <h1>{item.title}</h1>
      <p>{item.summary}</p>
      <Thumb src={item.image} alt={item.title} />

      <Button onClick={backToNews}>Voltar para as notícias</Button>
    </Template>
  )
}