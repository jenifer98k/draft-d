import React  from "react";
import Navbar from "./components/Navbar";
//import Hero from "./components/Hero";
import Card from "./components/Card";
import img from "../images/girl.png";


export default function App(){
return( // <Hero />

   <div>
       <Navbar />
  
     <Card
    img="girl.png"
    rating="5.0"
    reviewcount={6}
    country="USA"
    title="Life lessons with katie zaferes"
  price= "$136"/></div>
)
}
