import Menu from "./Menu.jsx"
import img from "../assets/logo.svg"

function Contato (){
    return(
        <div>
            <img src={img} style={{width:"50px", height:"50px"}} alt="" />
            <h1>Contato</h1>
            <Menu/>
        </div>
    )
}
export default Contato