import React from "react";
import {
  Link
} from "react-router-dom";
function HireBtn(){


return <>

<main className="btn_main">
<section className="btn_sec">
<Link to="/Portfolio/Contact" className="cube">
<div className="active-state">
<h2>
ThankYou
</h2>
</div>

<div className="Defualt-state">
<h1>

Hire Me
</h1>
</div>
</Link>

</section>
</main>

</>
}

export default HireBtn