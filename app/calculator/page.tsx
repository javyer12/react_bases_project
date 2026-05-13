'use client';
import React from "react";
export default function Calculator() {
    const [showOperationModal, setShowOperationModal] = React.useState(false);
    const [number1, setNumber1] = React.useState<string | undefined  >("");
    const [number2, setNumber2] = React.useState<string | undefined >("");
    const [result, setResult] = React.useState<number | undefined>(undefined);
    const [operation, setOperation] = React.useState<string | undefined>(undefined);
    // const [row, setRow] = React.useState<number>(1);

    // Segunda calculadora
    const [number3, setNumber3] = React.useState<string | undefined >("");
    const [result2, setResult2] = React.useState<number | undefined>(undefined);
    const [operation2, setOperation2] = React.useState<string | undefined>(undefined);
    const [showOperationModal2, setShowOperationModal2] = React.useState(false);

    //add and remove button pop up 
    const [showAddRemoveModal, setShowAddRemoveModal] = React.useState(false);

    const sumNumber = () => {
        const num1 = parseFloat(number1 || "0");
        const num2 = parseFloat(number2 || "0");
        if(!isNaN(num1) && !isNaN(num2)){
            setResult(num1 + num2);
            setOperation("Suma");
            setShowOperationModal(false);
        }else{
            alert("Please enter valid numbers for both fields.");
        }
    }
    const subtNumber = ()=>{
         const num1 = parseFloat(number1 || "0");
        const num2 = parseFloat(number2 || "0");
        if(!isNaN(num1) && !isNaN(num2)){
            setResult(num1 - num2);
            setOperation("Resta");
            setShowOperationModal(false);
        }else{
            alert("Please enter valid numbers for both fields.");
        }
    }
    const multiNumber = ()=>{
        const num1 = parseFloat(number1 || "0");
        const num2 = parseFloat(number2 || "0");
        if(!isNaN(num1) && !isNaN(num2)){
            setResult(num1 * num2);
            setOperation("Multiplicación");
            setShowOperationModal(false);
        }else{
            alert("Please enter valid numbers for both fields.");
        }
    }
    const divideNumber = ()=>{
         const num1 = parseFloat(number1 || "0");
        const num2 = parseFloat(number2 || "0");
        if(!isNaN(num1) && !isNaN(num2)){
            setResult(num1 / num2);
            setOperation("Division");
            setShowOperationModal(false);
        }else{
            alert("Please enter valid numbers for both fields.");
        }
    }
    const potencia = ()=>{
         const num1 = parseFloat(number1 || "0");
        const num2 = parseFloat(number2 || "0");
        if(!isNaN(num1) && !isNaN(num2)){
            setResult(num1 ** num2);
            setOperation("Potencia");
            setShowOperationModal(false);
        }else{
            alert("Please enter valid numbers for both fields.");
        }
    }

    // Segunda calculadora
    const factorialNumber = ()=>{
        const num3 = parseFloat(number3 || "0");
        if(!isNaN(num3) || num3 < 0 || !Number.isInteger(num3)){
            let factorial = 1;
            for(let i = 1; i <= num3; i++){
                factorial *= i;
            }
            setResult2(factorial);
            setOperation2("Factorial");
            setShowOperationModal2(false);
        }else{
            alert("Please enter a valid number.");
        }
    }
    
    const squareNumber = ()=>{
           const num3 = parseFloat(number3 || "0");
        if(!isNaN(num3) || num3 < 0 || !Number.isInteger(num3)){
            setResult2(Math.sqrt(num3));
            setOperation2("Raiz Cuadrada");
            setShowOperationModal2(false);
        }else{
            alert("Please enter a valid number.");
        }
    }
    return (
        <React.Fragment>
        <div className="flex flex-col items-center text-black justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4 text-black">Calculate</h1>
            <p className="text-lg text-gray-600">This is a simple calculator.</p>
            <div className="flex mt-4 space-x-2 items-center justify-center">
                <button
                    type="button"
                    onClick={()=> setShowAddRemoveModal(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Add Row
                </button>
                <button
                    type="button"
                    onClick={()=> setShowAddRemoveModal(true)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Delete Row
                </button>
            </div>
            <table className="table-auto mt-4">
                <thead>
                    <tr>
                        <th className="px-4 text-gray-800 py-2">Number 1</th>
                        <th className="px-4 text-gray-800 py-2">Number 2</th>
                        <th className="px-4 text-gray-800 py-2">
                            <button
                                type="button"
                                onClick={()=>setShowOperationModal(true)}
                                className="bg-gray-100 border border-gray-200 text-black px-4 py-2 rounded">
                                    Operation
                            </button>
                        </th>
                        <th className="px-4 text-gray-800 py-2">Result</th>
                    </tr>
                </thead>
                    <tbody>
                        {/* adding row did not work */}
                        {/* {[...Array(row)].map((_, index) => ( */}
                            <tr className="border-t">
                            <td className=" px-4 py-2"><input
                                value={number1}
                                onChange={(e) => setNumber1(e.target.value)}
                                data-np-intersection-state="visible"
                                type="number"
                                className=" border rounded px-2 py-1 w-full"
                                placeholder="Número 1"
                            /></td>
                            <td className=" px-4 py-2"><input
                                value={number2}
                                onChange={(e) => setNumber2(e.target.value)}
                                data-np-intersection-state="visible"
                                type="number"
                                className="border rounded px-2 py-1 w-full"
                                placeholder="Número 1"
                            /></td>
                            <td className="text-center p-2 ">{operation}</td>
                            <td className="text-center px-4 py-2">
                                {result}
                            </td>
                        </tr>
                        {/* ))} */}
                    </tbody>
            </table>
            {/* Second table */}
            <table className="table-auto mt-4">
                <thead>
                    <tr>
                        <th className="px-4 text-gray-800 py-2">Number 1</th>
                        <th className="px-4 text-gray-800 py-2"></th>
                        <th className="px-4 text-gray-800 py-2">
                            <button
                                type="button"
                                onClick={()=>setShowOperationModal2(true)}
                                className="bg-gray-100 border border-gray-200 text-black px-4 py-2 rounded">
                                    Operation
                            </button>
                        </th>
                        <th className="px-4 text-gray-800 py-2">Result</th>
                    </tr>
                </thead>
                    <tbody>
                        {/* adding row did not work */}
                        {/* {[...Array(row)].map((_, index) => ( */}
                            <tr className="border-t">
                            <td className=" px-4 py-2">
                                <input
                                value={number3}
                                onChange={(e) => setNumber3(e.target.value)}
                                data-np-intersection-state="visible"
                                type="number"
                                className=" border rounded px-2 py-1 w-full"
                                placeholder="Número 3"
                            /></td>
                            <td className=" px-4 py-2"><input
                                 value=""
                                data-np-intersection-state="visible"
                                type="string"
                                disabled
                                className=" rounded px-2 py-1 w-full"
                            /></td>
                            <td className="text-center p-2 ">{operation2}</td>
                            <td className="text-center px-4 py-2">
                                {result2}
                            </td>
                        </tr>
                        {/* ))} */}
                    </tbody>
            </table>
        </div>
        { showOperationModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                <div className="w-full max-w-2xl bg-white rounded-lg p-6">
                 <div className="mb-4 flex items-center justify-between px-4">
                    <h2 className="text-xl font-bold text-black mb-4">Selecciona una operación</h2>
                    <button
                        type="button"
                        onClick={()=>setShowOperationModal(false)}
                        className=" text-black px-4 py-2 rounded"
                    >
                        Close
                    </button>
                </div>
                    <div className="flex flex-col  p-2 items-center justify-center">
                        <button id="suma" type="button" onClick={sumNumber} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Suma</button>
                        <button id="subt" type="button" onClick={subtNumber} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Resta</button>
                        <button id="multi" type="button" onClick={multiNumber} className="bg-yellow-500 text-white px-4 py-2 rounded mt-2">Multiplicación</button>
                        <button id="division" type="button" onClick={divideNumber} className="bg-red-500 text-white px-4 py-2 rounded mt-2">División</button>
                        <button id="division" type="button" onClick={potencia} className="bg-blue-400 text-white px-4 py-2 rounded mt-2">Potencia</button>
                    </div>
                </div>
            </div>
         )
        }
        { showOperationModal2 && (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                <div className="w-full max-w-2xl bg-white rounded-lg p-6">
                 <div className="mb-4 flex items-center justify-between px-4">
                    <h2 className="text-xl font-bold text-black mb-4">Selecciona una operación</h2>
                    <button
                        type="button"
                        onClick={()=>setShowOperationModal2(false)}
                        className=" text-black px-4 py-2 rounded"
                    >
                        Close
                    </button>
                </div>
                    <div className="flex flex-col  p-2 items-center justify-center">
                        <button id="suma" type="button" onClick={factorialNumber} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Factorial</button>
                        <button id="subt" type="button" onClick={squareNumber} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Raiz Cuadrada</button>
                    </div>
                </div>
            </div>
         )
        }
        {showAddRemoveModal && (
           <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div className="w-full max-w-2xl rounded-xl p-6 bg-white">
                <div className="mb-4 flex items-center justify-between px-4">
                    <p className="text-black text-lg">This feature is not implemented yet.</p>
                    <button
                        type="button"
                        onClick={()=> setShowAddRemoveModal(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                    >
                        Close
                    </button>
                </div>
            </div>
           </div>)}
         </React.Fragment>
    );
}