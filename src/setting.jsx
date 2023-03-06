import React from "react";
import "./setting.css"

function Setting(prop) {


 


return <span className="spanBtn">
<img src={"./images/setting.png"} onClick={prop.open} className="Setting_BTN" alt="Setting" width={"40px"} />
</span>


}


export default Setting
