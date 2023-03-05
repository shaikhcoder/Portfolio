
import "./SettingPop.css"
function Settingpop(prop){

return <section className="pe_setting">
<div className="setting">
<div className="Exit">
<span className="Exit_X"><img src="./images/exit.png" alt="Exit" onClick={prop.open}/></span>
</div>
<div className="background"><h3>Background</h3>
<input type="color" onChange={prop.backInput} className="sel_back" value={prop.background_color}/>
</div>

<div className="Text_col"><h3>Text Color</h3>
<input type="color" onChange={prop.TextColor} className="sel_back left_sel" value={prop.text_color} />
</div>
<div className="apply">
<button className="btn_apply" onClick={prop.apply_func}>Apply</button>
</div>
</div>

</section>
}


export default Settingpop