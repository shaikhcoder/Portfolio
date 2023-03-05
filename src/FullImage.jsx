function FullImg(props){


return <div>
<div> 
<img className="card_img" onClick={()=>{console.log("Hello owrld")}} src={props.src} alt="pic" />
</div>
</div>
}

export default FullImg