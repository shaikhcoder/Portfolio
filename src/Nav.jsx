import React,{useState} from "react";
import {
  Link
} from "react-router-dom";
import {profile,contact,project} from "./action/index.js" 
import { useSelector , useDispatch } from "react-redux";
import Settingpop from "./settings_pop.jsx";



function Nav(props){
const [check_btn, setBtn] = useState(false)
const [backColor,setBack] = useState("#AA0040")
const [textColor,setText] = useState("#ffffff")
function apply_func(){
document.querySelector("body").style.background = backColor
document.querySelector("body").style.color = textColor
document.querySelector(".Defualt-state").style.background = `-webkit-linear-gradient(-70deg, ${backColor} 0%, ${textColor} 100%)`;
document.querySelector(".Defualt-state").style.textShadow = "2px 2px 1px black"
document.querySelector(".active-state").style.background = `-webkit-linear-gradient(-70deg, ${backColor} 0%, ${textColor} 100%)`;
document.querySelector(".active-state").style.textShadow = "2px 2px 1px black";
document.querySelector(".footer_div").style.borderTopColor= textColor
setBtn(check_btn?false:true)


}

function backInput(key){
setBack(key.target.value)
document.querySelector(".setting").style.background = backColor
document.querySelector(".setting").style.borderColor = backColor

}
function TextColor(key){

setText(key.target.value)
document.querySelector(".setting").style.color = textColor
}

function open(){
setBtn(check_btn?false:true)
}   

const state = useSelector(state => state.Changer)
const dispatch = useDispatch()

return <><button className="btn_nav"  onClick={props.Show_nav}><img className="button_img" src="./images/bars.png" alt="btn" /> </button>
<nav className={"nav_head " + props.changeClass}>

<ul className="ul_head">

<li className="link_side"><Link to="/Portfolio/" onClick={()=>dispatch(profile())} className={state.profile ? "link_head active_link" : "link_head"}>Profile</Link></li>

<li  className="link_side"><Link to="./images/resume.pdf" target="_blank" className="link_head" download>Resume</Link></li>

<li className="link_side"><Link to="/Portfolio/Projects" onClick={()=>dispatch(project())} className={state.project ? "link_head active_link" : "link_head"}>Projects</Link></li>
 
<li className="link_side"><Link to="/Portfolio/Contact" onClick={()=>dispatch(contact())} className={state.contact ? "link_head active_link" : "link_head"}>Contact</Link></li>


<li className="link_side">
<span onClick={ open} className={check_btn ? "Setting_BTN link_head active_link" : "Setting_BTN link_head"}>
Settings
</span>
</li>
</ul>



</nav>
{check_btn?<Settingpop open={open} apply_func={apply_func} background_color={backColor} TextColor={TextColor} text_color={textColor} backInput={backInput} />:""}

</>
}

export default Nav