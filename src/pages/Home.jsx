import '../App.css'
import gify from "../assets/sparkling-heart-copy.gif"
import CarolineHome from "../assets/caroline_images/welcome_to_art.png"



export default function Home(){

    
    return(
       <div className="background">
            
        <h1>WELCOME TO MY ISLAND</h1>
        <h2>This is where you can learn and celebrate some of the culture Caroline Polachek has cultivated</h2>
        <a href="/about">About Her</a>
        <img src={gify} width="500px"/>
        <a href="/portal">Aesthetic Portal</a>
        </div>
        

        
    )
}

