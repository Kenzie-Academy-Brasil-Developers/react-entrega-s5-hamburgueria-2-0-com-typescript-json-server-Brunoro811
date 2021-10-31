import {Container,Header,Logo,Seting,Main,ContainerBlack,Modal,HeaderModal,MainModal,Row,RowTotal} from "./menu.ts" 
import ButtonIcon from "../Components/ButtonIcon"
import ButtonCart from "../Components/ButtonCart"
import CardProduto from "../Components/CardProduto"
import CartCardProduto from "../Components/CartCardProduto"
import Button from "../Components/Button"
import {Images} from "../Components/Images"

import search from "../Assets/search.png"

import x from "../Assets/X.png"

import {useProduct} from "../Providers/Products"


import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Menu (){
    const history = useHistory()
    const {products,loadProduts} = useProduct();
    const [enable,setEnable] = useState(false);

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
                        <ButtonIcon  icon={search} />
                        <Link to={"/login"}>Login</Link>
                        <Link to={"/register"}>Cadastre-se</Link>
                    </Seting>
                </Header>
            </Container>
            <Container>
                <Main>
                    {products[0] &&
                    products.map((element,index)=> <CardProduto  key={index} img={Images[element.img]} category={element.category} price={element.price} name={element.name} callback={EnableDisable} />)
                    }
                </Main>
            </Container>
            {enable &&
            <ContainerBlack>
                <Modal className="slideIn">
                    <HeaderModal>
                        <p>
                        Atenção!
                        </p>
                        <ButtonIcon callback={EnableDisable}  icon={x} />
                    </HeaderModal>
                    <MainModal>
                    <Row isBorderBottom>
                       Faça Login para adicionar produtos ao carrinho!
                    </Row>
                    </MainModal>
                </Modal>
            </ContainerBlack>
            }
        </>
    )
}
export default Menu;