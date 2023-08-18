import { ReactNode } from "react";
import Header from "../header";
import { Container } from "../../assets/styles/global";

type Props = {
  children: ReactNode
}

export default function Template ({ children }: Props) {
  return (
    <div className="template-class">
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  )
}