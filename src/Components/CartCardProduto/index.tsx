import ButtonIcon from "../../Components/ButtonIcon";
import { Container, Row, Col, ColMini, Count, CountButton } from "./style";

import lixeira from "../../Assets/lixeira.png";
import { useState } from "react";
import { useProduct } from "../../Providers/Products";

interface productProps {
  img: string;
  name: string;
  index: number;
  quantity: number;
}

function CartCardProduto({ img, name, index, quantity }: productProps) {
  const [number, setNumber] = useState(1);
  const { cartProducts, setCartproducts, UpdateCart } = useProduct();

  const handleNumberMais = (name: string) => {
    UpdateCart(name);
    setNumber(number + 1);
  };
  const handleNumberMenos = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  const hanfleRemoved = () => {
    setCartproducts(
      cartProducts.filter((element, elementIndex) => elementIndex !== index)
    );
  };
  return (
    <Container>
      <Row>
        <Col>
          <ColMini isBackground>
            <img src={img} alt={img} />
          </ColMini>
          <ColMini>
            <h4>{name}</h4>
            <Count>
              <CountButton onClick={() => handleNumberMenos()}>-</CountButton>
              <p>{number}</p>
              <CountButton onClick={() => handleNumberMais(name)}>
                +
              </CountButton>
            </Count>
          </ColMini>
        </Col>
        <Col>
          <ButtonIcon callback={() => hanfleRemoved()} icon={lixeira} />
        </Col>
      </Row>
    </Container>
  );
}
export default CartCardProduto;
