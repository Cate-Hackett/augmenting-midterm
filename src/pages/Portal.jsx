import '../App.css'
import Caroline1 from "../assets/caroline_images/Caroline_9.png"
import Caroline2 from "../assets/caroline_images/Caroline_7.png"
import Caroline3 from "../assets/caroline_images/Caroline_8.png"
import Caroline4 from "../assets/caroline_images/Caroline_4.png"
import Caroline5 from "../assets/caroline_images/Caroline_5.png"
import Caroline6 from "../assets/caroline_images/Caroline_1.png"
import HelloButton from "../components/HelloButton"
import {useState} from 'react';

export default function Portal(){
    const [helloText, setHelloText] = useState("Click Meee");

    const hellos =[
        "fairytale",
        "ethereal",
        "modern-twists",
        "sexy",
        "y2k",
        "satirical",
        "dramatic",
        "dark"
    ]

    function changeHello(){
        const randomNumber = Math.floor(Math.random() * hellos.length);
        setHelloText(hellos[randomNumber]);
    }
    return(
        <>
        <p> </p>
        <a href="/">Home</a>
        <p> </p>
        <a href="/About">About Her</a>
        <h1>Her Aesthetic Portal</h1>
        <div>
            <button onClick={changeHello}>{helloText}</button>
        </div>
    
        <img src={Caroline1} width = "400px" alt = "album cover"/>
        <p>Butterly Net(feat Weyes Blood)- single cover</p>
        <img src={Caroline2} width = "400px"/>
        <p>Bunny Is A Rider- single cover</p>
        <img src={Caroline3} width = "400px"/>
        <p>Dang- single cover</p>
        <img src={Caroline4} width = "400px"/>
        <p>Pang- Album Cover</p>
        <img src={Caroline5} width = "400px"/>
        <p>Desire, I Want To Turn Into You- Album Art</p>
        <img src={Caroline6} width = "400px"/>
        <p>Desire, I Want To Turn Into You- Album Art</p>
        
        </>
    )
}