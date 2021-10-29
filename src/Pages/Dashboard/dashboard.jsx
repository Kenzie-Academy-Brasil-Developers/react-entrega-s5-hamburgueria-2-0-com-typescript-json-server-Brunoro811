import {Container,Header,Logo,Seting,Main} from "./dashboard.ts" 
import ButtonIcon from "../../Components/ButtonIcon"
import CardProduto from "../../Components/CardProduto"
import search from "../../Assets/search.png"
import logout from "../../Assets/logout.png"
import cart from "../../Assets/cart.png"

function Dashboard (){
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
                        <ButtonIcon  icon={cart} />
                        <ButtonIcon  icon={logout} />
                    </Seting>
                </Header>
            </Container>
            <Container>
                <Main>
                <CardProduto img={"https://drive.google.com/file/d/1Je4F_FobdZPox9KVQbxC7l5lm5Y56n_i/view?usp=sharing"} />
                </Main>
            </Container>
        </>
    )
}
export default Dashboard;