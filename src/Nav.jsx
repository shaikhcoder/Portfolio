import React from "react";
import {
  Link
} from "react-router-dom";

function Nav(props){



return <><button className="btn_nav"  onClick={props.Show_nav}><img className="button_img" src="./images/bars.png" alt="" /> </button>
<nav className={"nav_head " + props.changeClass}>

<ul className="ul_head">

<li className="link_side"><Link to="/"  className="link_head active_link">Profile</Link></li>
{/* <a href="./images/Ahtisham (4).pdf" className="link_head" download>Download Resume</a> */}
<li><Link to="./pdf/resume.pdf" target="_blank" className="link_head" download>Download Resume</Link></li>
</ul>
<ul className="ul_head">
<li><Link to="/Projects" className="link_head">Projects</Link></li>
 
<li><Link to="/Contact" className="link_head">Contact</Link></li>
</ul>
</nav></>
}

export default Nav