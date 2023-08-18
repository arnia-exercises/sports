import { NewItem as NewItemType } from "../../types/news"
import Thumb from "../thumb"
import { Flex, Title, MetaInfo } from "./styled"

type Props = {
  item: NewItemType
  handleClick: () => void
}

export default function NewItem ({ item, handleClick }: Props) {
  return (
    <Flex onClick={handleClick}>
      <Thumb src={item.image} alt={item.title} />

      <MetaInfo>
        <Title>{item.title}</Title>
        <p>{item.summary}</p>
      </MetaInfo>
    </Flex>
  )
}