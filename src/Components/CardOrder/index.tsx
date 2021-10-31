import { Container, Header, Main } from "./style";
import NewProductProps from "../../Providers/Products";
interface OrderProps {
  id: number;
  street: string;
  number: number;
  pay: string;
  products: NewProductProps;
}
interface CardOrderProps {
  objeto: OrderProps;
  orderProducts: NewProductProps[];
}
function CardOrder({ objeto, orderProducts }: CardOrderProps) {
  return (
    <Container>
      <Header>Order {objeto.id}</Header>
      <Main>
        <p>
          <strong>Rua: </strong>
          {objeto.street}
          <strong> Número: </strong>
          {objeto.number}
        </p>
        <p>
          <strong>Forma de Pagamento: </strong>
          {objeto.pay}
        </p>
        <div>
          <strong>Produtos: </strong>
          {orderProducts[0] &&
            orderProducts.map((element, index) => (
              <p key={index}>
                <strong>{element.quantity} x </strong> {element.name}
              </p>
            ))}
        </div>
      </Main>
    </Container>
  );
}
export default CardOrder;
