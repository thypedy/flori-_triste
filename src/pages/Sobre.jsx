import Menu from "./Menu.jsx"
import img from "../assets/logo.svg"

function Sobre (){
    return(
        <div>
            
            <h1> <img src={img} style={{width:"50px", height:"50px" }} alt="" /> Sobre</h1>
            <Menu/>
        </div>
    )
}
export default Sobre