import Menu from "./Menu.jsx"
import img from "../assets/logo.svg"
import flor from "../assets/dasdasdas.jpg"

function Produtos (){
    return(
        <div>
            <div>

            <img src={img} style={{width:"50px", height:"50px"}} alt="" />
            <h1>Produtos</h1>
            <Menu/>

            </div>

            <img src={flor} alt="" />
        </div>
    )
}
export default Produtos;