import { Container, Image, Title, Paragraph, Price } from "./style";
import Button from "../Button";

interface CardProdutoProps {
  img: string;
  name: string;
  category: string;
  price: number;
  callback: () => void | undefined;
}
function CardProduto({
  img = "",
  name = "title",
  category = "category",
  price = 0,
  callback,
}: CardProdutoProps) {
  return (
    <Container>
      <Image>
        <img src={img} alt={img} />
      </Image>
      <ul>
        <li>
          <Title>{name}</Title>
        </li>
        <li>
          <Paragraph>{category}</Paragraph>
        </li>
        <li>
          <Price>R$ {price.toFixed(2).replace(".", ",")} </Price>
        </li>
        <li className="LiButton">
          <Button
            callback={callback}
            param={{ img, name, category, price }}
            primary
            value={"Adicionar"}
          />
        </li>
      </ul>
    </Container>
  );
}
export default CardProduto;
