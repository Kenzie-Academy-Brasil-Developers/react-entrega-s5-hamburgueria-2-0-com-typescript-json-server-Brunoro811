import ButtonIcon from "../../Components/ButtonIcon";
import { Container, Row, Col, ColMini, Count, CountButton } from "./style";

import lixeira from "../../Assets/lixeira.png";
import { useState } from "react";
import { useProduct } from "../../Providers/Products";

import NewProductProps from "../../Providers/Products";

interface productProps {
  img: string;
  name: string;
  index: number;
  quantity: number;
  objeto: NewProductProps;
}

function CartCardProduto({
  objeto,
  img = "",
  index,
  quantity = 1,
}: productProps) {
  const [number, setNumber] = useState(quantity);
  const { cartProducts, setCartproducts, addCart, removedCart } = useProduct();

  const handleNumberMais = (name: string) => {
    addCart(objeto);
    setNumber(number + 1);
  };
  const handleNumberMenos = () => {
    if (number > 1) {
      removedCart(objeto);
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
            <img src={objeto.img} alt={objeto.img} />
          </ColMini>
          <ColMini>
            <h4>{objeto.name}</h4>
            <Count>
              <CountButton onClick={() => handleNumberMenos()}>-</CountButton>
              <p>{number}</p>
              <CountButton onClick={() => handleNumberMais(objeto.name)}>
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
