import { Image } from './styled'

type Props = {
  src: string
  alt: string
}

export default function Thumb ({ src, alt }: Props) {
  return (
    <Image>
      <img src={src} alt={alt} />
    </Image>
  )
}