import { Container, Image, Title, Paragraph, Price } from "./style";
import foto from "../../Assets/sanduiche.png";
import Button from "../Button";
interface CardProdutoProps {
  img: string;
  title: string;
  paragraph: string;
  price: number;
}
function CardProduto({
  img = "../../Assets/sanduiche.png",
  title = "title",
  paragraph = "paragraph",
  price = 0,
}: CardProdutoProps) {
  return (
    <Container>
      <Image>
        <img src={foto} alt="" />
      </Image>
      <ul>
        <li>
          <Title>{title}</Title>
        </li>
        <li>
          <Paragraph>{paragraph}</Paragraph>
        </li>
        <li>
          <Price>R$ {price} </Price>
        </li>
        <li className="LiButton">
          <Button primary value={"Adicionar"} />
        </li>
      </ul>
    </Container>
  );
}
export default CardProduto;
