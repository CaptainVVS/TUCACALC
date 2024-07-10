import React, {useEffect, useRef, useState} from 'react';
import './App.css';


function App() {
  const [calcInput, setCalcInput] = useState("")
  const [calcOutput, setcalcOutput] = useState("")


  const vidRef=useRef();


  useEffect(() => {
    if (isTucaDonca(calcOutput) && vidRef.current)
      (vidRef.current as any).play();
    },[calcOutput]);



  function Butt({number}) {
    return <button onClick={(e)=> addToInput(number)} className={"butt"}>{number}</button>
  }



  function equal(){
    let result =""
    try {
      result = (eval(calcInput)).toString()
    }
    catch (e) {
      result= "error"
    }
    setcalcOutput(result)
  }


  function addToInput(number){
    setCalcInput(calcInput + number)
    setcalcOutput("")
  }

  function backSpace() {
    setCalcInput(calcInput.slice(0, -1))
    setcalcOutput("")
  }
  function backBack() {
    setCalcInput("")
    setcalcOutput("")
  }

  const a =

    <div className={'milk'}>
      <div>
        {calcInput}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {calcOutput}
      </div>
      <div className="wrapper">
        <Butt number={1}/>
        <Butt number={2}/>
        <Butt number={3}/>
        <Butt number={"+"}/>
        <Butt number={4}/>
        <Butt number={5}/>
        <Butt number={6}/>
        <Butt number={"-"}/>
        <Butt number={7}/>
        <Butt number={8}/>
        <Butt number={9}/>
        <Butt number={"*"}/>
        <Butt number={"."}/>
        <Butt number={0}/>
        <Butt number={""}/>
        <Butt number={"/"}/>
        <button onClick={backSpace} className={"butt"}>B</button>
        <button onClick={backBack} className={"butt"}>D</button>
        <Butt number={""}/>
        <button onClick={equal} className={"butt"}>=</button>

      </div>
    </div>


  if (isTucaDonca(calcOutput)) {
    return <video src={"./UNKA DONKA.mp4"} ref={ vidRef }
                   width="100%" height="100%" controls>
    </video>
  }
  return a
}

function isTucaDonca(calcOutput) {
   return  calcOutput.length===3 && calcOutput[0]==calcOutput[1] && calcOutput[1]==calcOutput[2]
}

export default App;
