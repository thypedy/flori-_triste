import Menu from "./Menu.jsx"
import img from "../assets/logo.svg"

function Home(){
   return (
    <div>
        <img src={img} style={{width:"50px", height:"50px"}} alt="" />
        <h1>Home</h1>
        <Menu/>
    </div>
   )
}
export default Home