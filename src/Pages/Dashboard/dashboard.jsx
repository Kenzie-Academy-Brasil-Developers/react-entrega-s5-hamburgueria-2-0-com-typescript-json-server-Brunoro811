import {Container,Header,Logo,Seting,Main,ContainerBlack,Modal,HeaderModal,MainModal,Row,RowTotal} from "./dashboard.ts" 
import ButtonIcon from "../../Components/ButtonIcon"
import ButtonCart from "../../Components/ButtonCart"
import CardProduto from "../../Components/CardProduto"
import CartCardProduto from "../../Components/CartCardProduto"
import Button from "../../Components/Button"
import {Images} from "../../Components/Images"

import search from "../../Assets/search.png"
import logoutImg from "../../Assets/logout.png"
import cart from "../../Assets/cart.png"
import x from "../../Assets/X.png"

import {useProduct} from "../../Providers/Products"
import {useUsers} from "../../Providers/Users"


import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Dashboard (){
    const history = useHistory()
    const {products,loadProduts,addCart,cartProducts,total,clearCart} = useProduct();
    const [enable,setEnable] = useState(false);

    const {logout} = useUsers()
    useEffect(()=>{
        loadProduts();
    },[])

    
    const EnableDisable = () =>{
        setEnable(!enable)
    }
    const handleCheckoutOrder = () =>{
        history.push("/checkoutOrder")
    }
    return(
        <>
            <Container isBackground>
                <Header>
                    <Logo>
                    Burguer
                    <span> kenzie</span>
                    </Logo>
                    <Seting>
                    <Link to={"/orders"}>Pedidos</Link>
                        <ButtonIcon  icon={search} />
                        <ButtonCart callback={EnableDisable}  icon={cart} />
                        <ButtonIcon  callback={logout} icon={logoutImg} />
                    </Seting>
                </Header>
            </Container>
            <Container>
                <Main>
                    {products[0] &&
                    products.map((element,index)=> <CardProduto  key={index} img={Images[element.img]} category={element.category} price={element.price} name={element.name} callback={addCart} />)
                    }
                </Main>
            </Container>
            {enable &&
            <ContainerBlack>
                <Modal className="slideIn">
                    <HeaderModal>
                        <p>
                        Carrinho de Compras
                        </p>
                        <ButtonIcon callback={EnableDisable}  icon={x} />
                    </HeaderModal>
                    <MainModal>
                    <Row isBorderBottom>
                        {cartProducts[0] &&
                        cartProducts.map((element,index)=> <CartCardProduto key={index} img={Images[element.img]}  objeto={element}  quantity={element.quantity} index={index} name={element.name}   />)
                        }
                        {!cartProducts[0] &&
                            <p>Carrinho vazio!</p>
                        }
                    </Row>
                    {cartProducts[0] &&     
                        <Row>
                        <RowTotal>
                            <p>Total :</p>
                            <p>R$ 
                                {total.toFixed(2).replace(".",",")}
                            </p>
                            </RowTotal>
                            <Button callback={()=>clearCart()} value={"Remover Todos"} />
                            <Button primary callback={handleCheckoutOrder} value={"Finalizar Pedido"} />
                        </Row>
                    }
                    </MainModal>
                </Modal>
            </ContainerBlack>
            }
        </>
    )
}
export default Dashboard;