import React ,{useState} from "react";

function Section(){
const [un_hide_text , hide_text_un] = useState(true)
 const addText = " And Also Love to Do Projects of People Becouse Make People A Happy Is Best Gift of Nature”"
    const [addMore, setmore] = useState("...")



 function TextAread() {

        if (un_hide_text) {

            setmore(addText)
            hide_text_un(false)

        }
        else {

            setmore("...")
            hide_text_un(true)
        }


    }





return <>  <section>
            <div className="main_div_name">
                <h1 className="Main_Name">

                    Ahtisham
                </h1>

            </div>
            <div className="main_div_Title title_pro"><p>web developer</p></div>


            <div className="main_div_Title">
                <p id="Text_p">
                    “Web developer with a passion for creating user-friendly and efficient websites Skilled in <strong> Javascript Python Node.js React.js Express.js MongoDB GitHUB</strong>{addMore}
                </p>

            </div>
            <div className="show_content_perent" onClick={TextAread}>
                <img className="show_content" src="./images/arrow.png" alt="" />
            </div>




            <div className="skills_imgs">

                <img className="skill_img" id="imgs_ok" src="./images/javas.png" alt="javascript" />
            </div>


        </section></>
}

export default Section