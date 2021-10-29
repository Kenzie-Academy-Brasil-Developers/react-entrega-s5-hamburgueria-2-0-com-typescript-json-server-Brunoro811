import HeaderLogo from "../Components/HeaderLogo";
import bag from "../Assets/shopping-bag.svg"
import { Col, Container,CardBag, Bag,ColBag } from "./home";
import FormLogin from "../Components/FormLogin";

function Home (){
    return(
        <Container>
            <Col>
                <FormLogin/>
            </Col>
            
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
        </Container>
    )
}
export default Home; 