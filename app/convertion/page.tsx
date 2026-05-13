"use client";
import React from "react";
import { ConvertCaF,ConvertFaC } from "./ConvertionCtoF";

export default function ConvertirCaF() {
    //Celsius to Fahrenheit variables state
  const [celsiusValue, setCelsiusValue] = React.useState("");
  const [ConverTemp, setConverTemp] = React.useState<number | undefined>(
    undefined
  );

    // Fahrenheit to Celsius variables state
  const [fahrenheitValue, setFahrenheitValue]= React.useState("");
  const [ConvertTempFtoC, setConvertTempFtoC]= React.useState<number | undefined>(undefined);

    
  //Celsius to Fahrenheit  handler
  const HandleTemperatureConversionCtoF = () => {
    const parsedCelsiusValue = parseFloat(celsiusValue);

    if (!isNaN(parsedCelsiusValue)) {
      const fahrenheitValue = ConvertCaF(parsedCelsiusValue);
      setConverTemp(fahrenheitValue);
    } else {
      alert("Por favor, ingrese un valor numérico válido para Celsius.");
    }
  }; 


    // Fahrenheit to Celsius handler
  const HandleTemperatureConversionFtoC=()=>{
    const parsedFahrenheitValue = parseFloat(fahrenheitValue);
    if(!isNaN(parsedFahrenheitValue)){
        const celsiusValue = ConvertFaC(parsedFahrenheitValue);
        setConvertTempFtoC(celsiusValue);
    }else{
        alert("Please enter a valid numeric value for Fahrenheit.");
    }
  }


  return (
    <React.Fragment key="convert-celsius-fahrenheit">
        <div className="flex flex-row flex-1 items-center justify-center  font-sans">
        <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <h1 className="text-amber-500 text-3xl">Convert Celsius to Fahrenheit</h1>
      <div className="border-gray-500 text-sm mt-2">

      <input
      className="border border-gray-300 rounded-md p-2 mt-4 w-64 text-black"
      data-np-intersection-state="visible"
      type="number"
      id="celsius"
      placeholder="Ingrese temperatura en Celsius"
      value={celsiusValue}
      onChange={(e) => setCelsiusValue(e.target.value)}
      />
      <button 
      type="button" 
      className="bg-blue-500 text-white px-4 py-2  m-2 rounded-md mt-4 hover:bg-blue-600"
      onClick={HandleTemperatureConversionCtoF}>
        Convert
      </button>
      </div>
      {ConverTemp !== undefined && (
          <p className="m-3 text-black">The temperature in Fahrenheit is: {ConverTemp.toFixed(2)} °F</p>
        )}
        </div>

        {/* // Convertir de Fahrenheit a Celsius */}
        
        <div className="flex flex-col flex-1 items-center justify-center  font-sans ">
      <h1 className="text-green-500 text-3xl">Convert Fahrenheit to Celsius: </h1>
      <div className="text-gray-500 text-sm mt-2">

      <input
      className="border border-gray-300 rounded-md p-2 mt-4 w-64 text-black"
      data-np-intersection-state="visible"
      type="number"
      id="fahrenheit"
      placeholder="Insert temperature in Fahrenheit"
      value={fahrenheitValue}
      onChange={(e) => setFahrenheitValue(e.target.value)}
      />
      <button 
      type="button" 
      className="bg-blue-500 text-black px-4 py-2  m-2 rounded-md mt-4 hover:bg-blue-600"
      onClick={HandleTemperatureConversionFtoC}>
        Convert
      </button>
      </div>
      {ConvertTempFtoC !== undefined && (
          <p className="m-3 text-black">The temperature in Fahrenheit is: {ConvertTempFtoC.toFixed(2)} °C </p>
        )}
        </div>
           </div> 
    </React.Fragment>
  );
}
