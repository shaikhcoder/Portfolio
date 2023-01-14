import React from "react";
import Card from "./Card";
import "./card.css"

function GroupCard(){

return<>
 <div>
            <div className="group_card">

<Card src="./images/three.PNG" title="ROlling Ball" language="Javascript, Three.js" Data="A rolling ball created with Three.js offers an interactive and visually engaging user experience. The ball is created using Three.js, it moves along a track, the color can be changed, and user interaction is possible. These features are all achieved through the use of various classes and libraries within Three.js"/>
<Card src="./images/pyProject.jpg" title="FACE RECOGNITION ATTENDANCE SYSTEM" language="Python, openCV" Data="Implemented an automated attendance tracking system
Features:
using facial recognition.
use student face to attend
store record in a txt file
the teacher can check to make a whole record or check one
student's record"/>
<Card src="./images/Lcoin.PNG" title="Lcoin" language="Motoko, React.js" Data="Developed a digital token using blockchain technology and Mokoto, with a user interface built using React.js. Implemented smart contracts, integrated Dfinity for interaction with the blockchain, and also added new features"/>

</div>
</div>
</>
}
export default GroupCard