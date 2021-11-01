import {Container,Header,Logo,Seting,Main,ContainerBlack,Modal,HeaderModal,MainModal,Row} from "./menu.ts" 
import ButtonIcon from "../Components/ButtonIcon"
import CardProduto from "../Components/CardProduto"
import Button from "../Components/Button"
import {Images} from "../Components/Images"

import search from "../Assets/search.png"

import x from "../Assets/X.png"

import {useProduct} from "../Providers/Products"
import {useUsers} from "../Providers/Users"


import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Menu (){

    const {products,loadProduts} = useProduct();
    const {NoticesLocalStorage} = useUsers() ;
    const [enable,setEnable] = useState(false);
    const [isNotice,setIsNotice] = useState(localStorage.getItem("@Notices_kenzie_burguer"));

    useEffect(()=>{
        loadProduts();
    },[])

    
    const EnableDisable = () =>{
        setEnable(!enable)
    }
    const Notice = () =>{
       setIsNotice(!isNotice);
       NoticesLocalStorage()

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
             {!isNotice &&
            <ContainerBlack>
                <Modal className="slideIn">
                    <HeaderModal>
                        <p>
                        Atenção!
                        </p>
                        <ButtonIcon callback={Notice}  icon={x} />
                    </HeaderModal>
                    <MainModal>
                    <Row isBorderBottom>
                       O App Kenzie Burguer usa uma FAKE API por isso dado um determinado tempo os dados são apagamos totalmente. Caso isso conteça os produtos seram cadastrados automaticamente (dê o reload nesta página) mas seu usuário será perdido e sentimos muito por isso.<br/> Por favor cadastre-se novamente! Agradecemos a compreenção.
                    </Row>
                    <Button primary callback={Notice} value={"Obrigado por me avisar!"} />
                    </MainModal>
                </Modal>
            </ContainerBlack>
            }
        </>
    )
}
export default Menu;