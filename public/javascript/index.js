const imgArr = ["./images/javas.png","./images/python3d.png","./images/github3d.png","./images/node.png","./images/react.png","./images/mongodb.png"]
let cont = 0 ;



setInterval(()=>{


if(window.location.href.endsWith("/")){
document.querySelector(".skill_img").src = imgArr[cont]
cont++;
if(cont === imgArr.length){
cont = 0
}


}

},4000)
