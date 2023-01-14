import React,{useState} from "react";
import Nav from "./Nav";
function Header(props){
const [clicked, setClick] = useState(true)
    const [changeClass, setClass] = useState("")
const [super_head, setsuperHead] = useState("")
function Show_nav() {
        if (clicked) {
            setClass("nav_head1")
            setsuperHead("super_head1")

            setClick(false)

        }
        else {
            setClass("")
            setsuperHead("")

            setClick(true)
        }

    }

return <>
<header className={"super_head " + super_head}> <Nav changeClass={changeClass} Show_nav={Show_nav} /> {props.dataOther()} </header>



</>
}

export default Header