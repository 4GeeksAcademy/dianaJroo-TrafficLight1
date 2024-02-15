import {useState} from "react";
import React from "react";

const TrafficLight = () => {
  const [lightOn,setLightOn]= useState("green");
  return (
    <div className="contenedor"> 
      <div className="base"></div>
      <div className="semaforo"> 
        <div onClick={()=>{setLightOn("red")}} className={"light red " + (lightOn == "red" ? "redOn" : "")}></div>
        <div onClick={()=>{setLightOn("yellow")}} className={"light yellow " + (lightOn == "yellow" ? "yellowOn" : "")}></div>
        <div onClick={()=>{setLightOn("green")}} className={"light green " + (lightOn == "green" ? "greenOn" : "")}></div>


      </div>
    </div>

  );

}



export default TrafficLight;