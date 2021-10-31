import {RadioGroup,FormControlLabel,Radio} from "@material-ui/core"

import {Container,Header,Logo,Seting,Main,Cart,HeaderCart,MainCart,Row,ContainerRadioGroup} from "./CheckoutOrder.ts" 
import ButtonIcon from "../../Components/ButtonIcon"
import Button from "../../Components/Button"

import search from "../../Assets/search.png"
import logoutImg from "../../Assets/logout.png"

import {useProduct} from "../../Providers/Products"
import {useUsers} from "../../Providers/Users"


import { useHistory } from "react-router"
import { useState } from "react"
import Input from "../../Components/Input"
import *  as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function CheckoutOrder (){
    const history = useHistory()
    const {cartProducts} = useProduct();
    const [street,setStreet] = useState("");
    const [number , setNumber] = useState();
    const [pay,setPay] = useState("");

    const {logout,registerNewOrder} = useUsers()


    const schema = yup.object().shape({
        street: yup.string().required("Campo obrigatório"),
        number: yup.string().required("Campo Obrigatório"),
      });
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(schema) });
      
      const handleRegisterSale = () =>{
        registerNewOrder({street,number,pay,products: cartProducts})
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
                        <ButtonIcon  callback={logout} icon={logoutImg} />
                    </Seting>
                </Header>
            </Container>
            <Container>
                <Main>
                <Cart>
                    <HeaderCart>
                        <p>
                        Endereço de Entrega
                        </p>
                    </HeaderCart>
                    <MainCart>
                    <Row isBorderBottom>
                        <form onSubmit={handleSubmit(handleRegisterSale)}>
                            <Input
                                register={register}
                                registerParam={"street"}
                                value={street}
                                setValue={setStreet}
                                label="Rua , avenida , travessa e etc..."
                                errors={errors?.street}
                                />
                                <br/>
                                  <Input
                                  type={"number"}
                                register={register}
                                registerParam={"number"}
                                value={number}
                                setValue={setNumber}
                                label="Número da casa, predio com apartamento,predio comercial com sala e etc"
                                errors={errors?.number}
                                />

                              
                                    <ContainerRadioGroup>
                                    <h3>Formas de Paramento</h3>
                                    <RadioGroup
                                        aria-label="gender"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={pay}
                                        onClick={(e)=>setPay(e.target.value)}
                                    >
                                        <FormControlLabel  value="Cartão de Crédito/Débito" control={<Radio color="default" />} label="Cartão de Crédito/Débito" />
                                        <FormControlLabel value="Avista Dinheiro" control={<Radio color="default" />} label="Avista Dinheiro" />
                                        <FormControlLabel value="Pix (Na entrega)" control={<Radio color="default" />} label="Pix (Na entrega)" />
                                    </RadioGroup>
                                    </ContainerRadioGroup>
                                
                                 {cartProducts[0] &&     
                                    <Row>
                                         <Button primary type="submit" value={"Finalizar Pedido"} />
                                    </Row>
                                }
                        </form>
                    </Row>
                   
                    </MainCart>
                </Cart>
                </Main>
            </Container>
            
        </>
    )
}
export default CheckoutOrder;