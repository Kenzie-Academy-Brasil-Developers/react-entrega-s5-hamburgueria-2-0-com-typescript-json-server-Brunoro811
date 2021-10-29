import {Container,Header,Logo,Seting,Main,ContainerBlack,Modal,HeaderModal,MainModal,Row,RowTotal} from "./dashboard.ts" 
import ButtonIcon from "../../Components/ButtonIcon"
import ButtonCart from "../../Components/ButtonCart"
import CardProduto from "../../Components/CardProduto"
import CartCardProduto from "../../Components/CartCardProduto"
import Button from "../../Components/Button"

import search from "../../Assets/search.png"
import logoutImg from "../../Assets/logout.png"
import cart from "../../Assets/cart.png"
import x from "../../Assets/X.png"

import {useProduct} from "../../Providers/Products"
import {useUsers} from "../../Providers/Users"

import {
    hamburguer,
    comboKenzie,
    fantaGuarana,
    bigKenzie,
    mcFlure,
    ovoMaltine,
    xBurguer,
    coca,
  } from "../../Components/Images";
import { useEffect, useState } from "react"

function Dashboard (){
    const {products,loadProduts,addCart,cartProducts} = useProduct()
    const [enable,setEnable] = useState(false)
    const {logout} = useUsers()
    useEffect(()=>{
        loadProduts();
    },[])
    const images = [
        hamburguer,
        xBurguer,
    comboKenzie,
    fantaGuarana,
    bigKenzie,
    mcFlure,
    ovoMaltine,
    coca,
    ];
    const EnableDisable = () =>{
        setEnable(!enable)
    }
    return(
        <>
        {console.log(cartProducts)}
            <Container isBackground>
                <Header>
                    <Logo>
                    Burguer
                    <span> kenzie</span>
                    </Logo>
                    <Seting>
                        <ButtonIcon  icon={search} />
                        <ButtonCart callback={EnableDisable}  icon={cart} />
                        <ButtonIcon  callback={logout} icon={logoutImg} />
                    </Seting>
                </Header>
            </Container>
            <Container>
                <Main>
                    {products[0] &&
                    products.map((element,index)=> <CardProduto key={index} img={images[index]} category={element.category} price={element.price} name={element.name} callback={addCart} />)
                    }
                </Main>
            </Container>
            {enable &&
            <ContainerBlack>
                <Modal>
                    <HeaderModal>
                        <p>
                        Carrinho de Compras
                        </p>
                        <ButtonIcon callback={EnableDisable}  icon={x} />
                    </HeaderModal>
                    <MainModal>
                    <Row isBorderBottom>
                        {cartProducts[0] &&
                        cartProducts.map((element,index)=> <CartCardProduto key={index} quantity={2} index={index} name={element.name} img={images[index]}  />)
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
                            {cartProducts[0] &&
                                cartProducts.reduce((acc,value)=>acc+(value.price*value.quantity),0).toFixed(2).replace(".",",")
                                }
                            </p>
                            </RowTotal>
                            <Button callback={()=>""} value={"Remover Todos"} />
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