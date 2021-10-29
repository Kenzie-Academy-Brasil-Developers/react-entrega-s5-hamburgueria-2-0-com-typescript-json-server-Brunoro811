import HeaderLogo from "../Components/HeaderLogo";
import bag from "../Assets/shopping-bag.svg"
import { Col, Container,CardBag, Bag,ColBag } from "./register";
import FormRegister from "../Components/FormRegister";

function Register (){
    return(
        <Container>
            
            <Col>
                <HeaderLogo/>
                <CardBag>
                    <Bag >
                        <img src={bag} alt="Bag svg" />
                    </Bag>
                    <ColBag>
                    A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.
                    </ColBag>
                </CardBag>
            </Col>
            <Col>
                <FormRegister/>
            </Col>
        </Container>
    )
}
export default Register; 