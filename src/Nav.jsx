import React from "react";
import {
  Link
} from "react-router-dom";
import {profile,contact,project} from "./action/index.js" 
import { useSelector , useDispatch } from "react-redux";



function Nav(props){

const state = useSelector(state => state.Changer)
const dispatch = useDispatch()

return <><button className="btn_nav"  onClick={props.Show_nav}><img className="button_img" src="./images/bars.png" alt="btn" /> </button>
<nav className={"nav_head " + props.changeClass}>

<ul className="ul_head">

<li className="link_side"><Link to="/Portfolio/" onClick={()=>dispatch(profile())} className={state.profile ? "link_head active_link" : "link_head"}>Profile</Link></li>

<li><Link to="./images/resume.pdf" target="_blank" className="link_head" download>Download Resume</Link></li>
</ul>
<ul className="ul_head">
<li><Link to="/Portfolio/Projects" onClick={()=>dispatch(project())} className={state.project ? "link_head active_link" : "link_head"}>Projects</Link></li>
 
<li><Link to="/Portfolio/Contact" onClick={()=>dispatch(contact())} className={state.contact ? "link_head active_link" : "link_head"}>Contact</Link></li>
</ul>
</nav></>
}

export default Nav